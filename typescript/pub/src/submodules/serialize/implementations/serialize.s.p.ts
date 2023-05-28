import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../resolved"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"


export const $$: A.serialize = ($d) => {
    return ($, $i) => {

        function escape($: string) {
            return $d.escape({
                'escape': "$",
                'patterns to escape': pm.wrapRawArray(["_"]),
                'string': $
            })
        }
        const Function__Declaration = (
            $: g_in.T.Function__Declaration,
            $p: {
                'type parameters': g_in.T.Type__Parameters
            },
            $i: g_fp.SYNC.I.Line
        ) => {
            $d.enrichedDictionaryForEach($['type parameters'].local, { //<--- local parameters, the others are already serialized with the type
                'onEmpty': () => {

                },
                'onNotEmpty': ($c) => {
                    $i.snippet(`<`)
                    $c(($) => {
                        $i.snippet(`_T${$d.createIdentifier($.key)}${$.isLast ? `` : `, `}`)
                    })
                    $i.snippet(`>`)
                }
            })
            $i.snippet(`(`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`$: `)
                    Type($.context, $p, $i)
                    $i.snippet(`,`)
                })
                $d.enrichedDictionaryForEach(
                    $.parameters,
                    {
                        'onEmpty': () => { },
                        'onNotEmpty': ($c) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`$p: {`)
                                $i.indent(($i) => {
                                    $c(($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`readonly ${$d.createApostrophedString($.key)}: `)
                                            Type($.value, $p, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            })
                        },
                    }
                )
            })
            $i.snippet(`) => `)
        }
        const Nested__Namespace = (
            $: g_in.T.Nested__Namespace,
            depth: number,
            $i: g_fp.SYNC.I.Block
        ) => {
            $.imports
            Namespace($.namespace, depth, $i)
        }

        const Namespace = (
            $: g_in.T.Namespace,
            depth: number,
            $i: g_fp.SYNC.I.Block
        ) => {
            const $tp = $.parameters
            const $ns = $.namespaces

            /*
            namespaces in typescript work differently than namespaces in proto

            in typescript, a nested namespace shadows a higher namespace with the same name.
            in proto, this is not the case.
            to create a proper mapping from proto to typescript, we must work around this.
            If a parent namespace is referenced but would be shadowed, we create an intermediate name for that namespace
            which can be referenced by a nested namespace.

            generated typescript:

            namespace MyNamespace {
                type MyType = number
            }

            import _p0_MyNamespace = MyNamespace //additionally generated to allow access

            namespace Hierarchy {
                namespace MyNamespace { //shadows the higher one

                }

                namespace Nested {
                    type MyOtherType = _p0_MyNamespace.MyType //referring to the alternative name
                }
            }

            */

            // const namespacesWithSpecialChildren = $.namespaces.map<pt.Dictionary<string>>(($) => {
            //     switch ($[0]) {
            //         case 'local': return pl.ss($, ($) => $d.filter($.namespaces.__mapWithKey(($, key) => {
            //             switch ($[0]) {
            //                 case 'local': return pl.ss($, ($) => [false])
            //                 case 'parent sibling': return pl.ss($, ($) => {
            //                     return key !== $.namespace.key
            //                         ? [true, $.namespace.key] //A special parent namespace reference
            //                         : [false]
            //                 })
            //                 default: return pl.au($[0])
            //             }
            //         })))
            //         case 'parent sibling': return pl.ss($, ($) => pm.wrapRawDictionary({}))
            //         default: return pl.au($[0])
            //     }
            // })
            // $d.dictionaryForEach(
            //     $d.filter(namespacesWithSpecialChildren.map(($) => {
            //         return $d.isEmpty($)
            //             ? [false]
            //             : [true, $]
            //     })),
            //     ($) => {
            //         $d.dictionaryForEach($.value, ($) => {
            //             $i.line(`import _p${depth}_${$d.createIdentifier(escape($.value))} = ${$d.createIdentifier(escape($.value))}`)
            //         })
            //     }
            // )
            // $d.filter($.namespaces.map<>(($) => {
            //     switch ($[0]) {
            //         case 'local': return pl.ss($, ($) =>
            //             $d.isEmpty($d.filter($.namespaces.map(($) => [false])))
            //             ? [false]
            //             : [true, null]
            //         )
            //         case 'parent sibling': return pl.ss($, ($) => [false])
            //         default: return pl.au($[0])
            //     }
            // }))
            $.namespaces.__forEach(() => false, ($, key) => {
                const nsKey = key
                const ns = $
                function isShadowed(key: string): boolean {
                    return ns.namespace.namespaces.__getEntry(
                        key,
                        () => true,
                        () => false
                    )
                }
                $.imports.__forEach(() => false, ($, key) => {
                    function doShadowed(referencedKey: string) {
                        if (isShadowed(key)) {
                            $i.line(``)
                            $i.line(`import _I${$d.createIdentifier(escape(nsKey))}_${$d.createIdentifier(escape(key))} = ${$d.createIdentifier(escape(referencedKey))}`)
                        }
                    }
                    switch ($[0]) {
                        case 'parent import':
                            pl.ss($, ($) => {
                                if (key === $.key) {
                                    //nothing to do
                                } else {
                                    doShadowed($.key)
                                }
                            })
                            break
                        case 'sibling':
                            pl.ss($, ($) => {
                                doShadowed($.key)
                            })
                            break
                        default: pl.au($[0])
                    }
                })
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export namespace ${$d.createIdentifier(escape(key))} {`)
                    $i.indent(($i) => {

                        $.imports.__forEach(() => false, ($, key) => {
                            $i.line(``)
                            $i.nestedLine(($i) => {
                                $i.snippet(`import _I${$d.createIdentifier(escape(key))} = `)

                                function doPossiblyShadowed(referencedKey: string) {
                                    if (isShadowed(key)) {
                                        $i.snippet(`_I${$d.createIdentifier(escape(nsKey))}_${$d.createIdentifier(escape(key))}`)
                                    } else {
                                        $i.snippet(`${$d.createIdentifier(escape(referencedKey))}`)

                                    }
                                }
                                switch ($[0]) {
                                    case 'parent import':
                                        pl.ss($, ($) => {
                                            if (key === $.key) {
                                                //nothing to do
                                            } else {
                                                doPossiblyShadowed($.key)
                                            }
                                        })
                                        break
                                    case 'sibling':
                                        pl.ss($, ($) => {
                                            doPossiblyShadowed($.key)
                                        })
                                        break
                                    default: pl.au($[0])
                                }

                            })
                        })
                        Namespace($.namespace, depth + 1, $i)
                    })
                    $i.snippet(`}`)
                })
            })
            $.types.__forEach(() => false, ($, key) => {
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export type ${$d.createIdentifier(key)}`)
                    Type__Parameters($tp, $i)
                    $i.snippet(` = `)
                    Type($, { 'type parameters': $tp }, $i)
                })
            })


        }

        // const Namespace__2 = (
        //     $: g_in.T.Namespace__2,
        //     $i: g_fp.SYNC.I.Block
        // ) => {

        // }

        const Namespace__Selection__Tail = (
            $: g_in.T.Namespace__Selection__Tail,
            $i: g_fp.SYNC.I.Line
        ) => {
            $i.snippet(`${$d.createIdentifier(escape($.namespace.key))}.`)
            pl.optional(
                $.tail,
                ($) => {
                    Namespace__Selection__Tail($, $i)
                },
                () => {

                }
            )
        }

        const Namespace__Selection = (
            $: g_in.T.Namespace__Selection,
            $i: g_fp.SYNC.I.Line
        ) => {
            pl.cc($.start, ($) => {
                switch ($[0]) {
                    case 'import':
                        pl.ss($, ($) => {
                            $i.snippet(`_I${$d.createIdentifier(escape($.namespace.key))}.`)
                            pl.optional(
                                $.tail,
                                ($) => Namespace__Selection__Tail($, $i),
                                () => { }
                            )
                        })
                        break
                    case 'local':
                        pl.ss($, ($) => {
                            Namespace__Selection__Tail($.namespace, $i)
                        })
                        break
                    default: pl.au($[0])
                }
            })
        }

        const Root = (
            $: g_in.T.Root,
            $i: g_fp.SYNC.I.Block
        ) => {
            $i.line(``)
            $i.line(`import * as _pt from 'pareto-core-types'`)
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`namespace _ {`)
                $i.indent(($i) => {
                    $i.line(``)
                    $i.nestedLine(($i) => {
                        $i.snippet(`export type Address<T> = { get: () => T, set: ($: T) => void } `)
                    })
                })
                $i.snippet(`}`)
            })
            Namespace($, 0, $i)
        }

        const Type = (
            $: g_in.T.Type,
            $p: {
                'type parameters': g_in.T.Type__Parameters
            },
            $i: g_fp.SYNC.I.Line
        ) => {
            switch ($[0]) {
                case 'address function':
                    pl.ss($, ($) => {
                        Function__Declaration($.declaration, $p, $i)
                        $i.snippet(`_.Address<`)
                        Type($['return type'], $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'array':
                    pl.ss($, ($) => {
                        $i.snippet(`_pt.Array<`)
                        Type($, $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'boolean':
                    pl.ss($, ($) => {
                        $i.snippet(`boolean`)
                    })
                    break
                case 'computed':
                    pl.ss($, ($) => {
                        $i.snippet(`_pt.ComputedValue<`)
                        Type($, $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'dictionary':
                    pl.ss($, ($) => {
                        $i.snippet(`_pt.Dictionary<`)
                        Type($, $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'group':
                    pl.ss($, ($) => {
                        $d.enrichedDictionaryForEach($, {
                            'onEmpty': () => {
                                $i.snippet(`null`)
                            },
                            'onNotEmpty': ($c) => {
                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $c(($) => {
                                        $i.nestedLine(($i) => {
                                            pl.optional(
                                                $.value.mutable,
                                                () => { },
                                                () => {
                                                    $i.snippet(`readonly `)
                                                }
                                            )
                                            $i.snippet(`${$d.createApostrophedString($.key)}: `)
                                            Type($.value.type, $p, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            }
                        })
                    })
                    break

                case 'lookup':
                    pl.ss($, ($) => {
                        $i.snippet(`_pt.Lookup<`)
                        Type($, $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'null':
                    pl.ss($, ($) => {
                        $i.snippet(`null`)
                    })
                    break
                case 'number':
                    pl.ss($, ($) => {
                        $i.snippet(`number`)
                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`_pt.OptionalValue<`)
                        Type($, $p, $i)
                        $i.snippet(`>`)
                    })
                    break
                case 'procedure':
                    pl.ss($, ($) => {
                        Function__Declaration($.declaration, $p, $i)
                        $i.snippet(`void`)
                    })
                    break
                case 'string':
                    pl.ss($, ($) => {
                        $i.snippet(`string`)
                    })
                    break
                case 'tagged union':
                    pl.ss($, ($) => {
                        $d.enrichedDictionaryForEach($, {
                            'onEmpty': () => {
                                $i.snippet(`null`)
                            },
                            'onNotEmpty': ($c) => {
                                $i.indent(($i) => {
                                    $c(($) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`| [${$d.createApostrophedString($.key)}, `)
                                            Type($.value, $p, $i)
                                            $i.snippet(`]`)
                                        })
                                    })
                                })
                            }
                        })

                    })
                    break
                case 'type parameter':
                    pl.ss($, ($) => {
                        $i.snippet(`_T${$d.createIdentifier($.key)}`)
                    })
                    break
                case 'type reference':
                    pl.ss($, ($) => {
                        switch ($[0]) {
                            case 'cyclic sibling':
                                pl.ss($, ($) => {
                                    $i.snippet(`${$d.createIdentifier($.key)}`)
                                    Type__Parameters($p['type parameters'], $i)
                                })
                                break
                            case 'external':
                                pl.ss($, ($) => {

                                    Namespace__Selection($['namespace path'], $i)
                                    $i.snippet(`${$d.createIdentifier($.type.key)}`)

                                    function mergeTypeArguments($: g_in.T.Namespace__Selection__Tail): pt.Dictionary<g_in.T.Type__Arguments.D> {
                                        return $d.mergeAndIgnore({
                                            'primary': pl.optional(
                                                $.tail,
                                                ($) => mergeTypeArguments($),
                                                () => pm.wrapRawDictionary({})
                                            ),
                                            'secondary': $.arguments,
                                        })
                                    }
                                    const mergedTypeArguments: g_in.T.Type__Arguments = pl.cc($['namespace path'].start, ($) => {
                                        switch ($[0]) {
                                            case 'import':
                                                return pl.ss($, ($) => {
                                                    return $d.mergeAndIgnore({
                                                        'primary': pl.optional(
                                                            $.tail,
                                                            ($) => mergeTypeArguments($),
                                                            () => pm.wrapRawDictionary({})
                                                        ),
                                                        'secondary': $.arguments,
                                                    })

                                                })
                                            case 'local':
                                                return pl.ss($, ($) => {
                                                    return mergeTypeArguments($.namespace)
                                                })
                                            default: return pl.au($[0])
                                        }
                                    })


                                    function selectNS2FromSelectionTail($: g_in.T.Namespace__Selection__Tail): g_in.T.Namespace {
                                        return pl.optional(
                                            $.tail,
                                            ($) => selectNS2FromSelectionTail($),
                                            () => $.namespace.referent.namespace
                                        )
                                    }

                                    function selectNS2FromImport($: g_in.T.Import): g_in.T.Namespace {
                                        switch ($[0]) {
                                            case 'parent import': return pl.ss($, ($) => selectNS2FromImport($.referent))
                                            case 'sibling': return pl.ss($, ($) => $.referent.namespace)
                                            default: return pl.au($[0])
                                        }
                                    }

                                    function selectNS2FromSelection($: g_in.T.Namespace__Selection): g_in.T.Namespace {
                                        return pl.cc($.start, ($) => {
                                            switch ($[0]) {
                                                case 'import': return pl.ss($, ($) => pl.optional(
                                                    $.tail,
                                                    ($) => selectNS2FromSelectionTail($),
                                                    () => selectNS2FromImport($.namespace.referent)
                                                ))
                                                case 'local': return pl.ss($, ($) => selectNS2FromSelectionTail($.namespace))
                                                default: return pl.au($[0])
                                            }
                                        })
                                    }



                                    $d.enrichedDictionaryForEach(selectNS2FromSelection($['namespace path']).parameters.aggregated, {
                                        'onEmpty': () => {

                                        },
                                        'onNotEmpty': ($c) => {
                                            $i.snippet(`<`)
                                            $c(($) => {
                                                mergedTypeArguments.__getEntry(
                                                    $.key,
                                                    ($) => {
                                                        Type($.content.type, $p, $i)
                                                    },
                                                    () => {
                                                        //it is a type parameter that is shared by the referer and referent.
                                                        $i.snippet(`_T${$d.createIdentifier($.key)}`)
                                                    }
                                                )
                                                $i.snippet(`${$.isLast ? `` : `, `}`)
                                            })
                                            $i.snippet(`>`)
                                        }
                                    })


                                })
                                break
                            case 'sibling':
                                pl.ss($, ($) => {
                                    $i.snippet(`${$d.createIdentifier($.key)}`)
                                    Type__Parameters($p['type parameters'], $i)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                    break
                case 'value function':
                    pl.ss($, ($) => {
                        Function__Declaration($.declaration, $p, $i)
                        Type($['return type'], $p, $i)
                    })
                    break
                default: pl.au($[0])
            }
        }

        const Type__Parameters = (
            $: g_in.T.Type__Parameters,
            $i: g_fp.SYNC.I.Line
        ) => {
            $d.enrichedDictionaryForEach($.aggregated, {
                'onEmpty': () => {

                },
                'onNotEmpty': ($c) => {
                    $i.snippet(`<`)
                    $c(($) => {
                        $i.snippet(`_T${$d.createIdentifier($.key)}${$.isLast ? `` : `, `}`)
                    })
                    $i.snippet(`>`)
                }
            })
        }

        Root($, $i)
    }
}