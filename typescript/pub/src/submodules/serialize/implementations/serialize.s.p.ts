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
            Type__Parameters($['type parameters'], $i)
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
        const Local__Namespace = (
            $: g_in.T.Local__Namespace,
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

            const namespacesWithSpecialChildren = $.namespaces.map<pt.Dictionary<string>>(($) => {
                switch ($[0]) {
                    case 'local': return pl.ss($, ($) => $d.filter($.namespaces.__mapWithKey(($, key) => {
                        switch ($[0]) {
                            case 'local': return pl.ss($, ($) => [false])
                            case 'parent sibling': return pl.ss($, ($) => {
                                return key !== $.namespace.key
                                    ? [true, $.namespace.key] //A special parent namespace reference
                                    : [false]
                            })
                            default: return pl.au($[0])
                        }
                    })))
                    case 'parent sibling': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                    default: return pl.au($[0])
                }
            })
            $d.dictionaryForEach(
                $d.filter(namespacesWithSpecialChildren.map(($) => {
                    return $d.isEmpty($)
                        ? [false]
                        : [true, $]
                })),
                ($) => {
                    $d.dictionaryForEach($.value, ($) => {
                        $i.line(`import _p${depth}_${$d.createIdentifier(escape($.value))} = ${$d.createIdentifier(escape($.value))}`)
                    })
                }
            )
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
                switch ($[0]) {
                    case 'local':
                        pl.ss($, ($) => {
                            $i.line(``)
                            $i.nestedLine(($i) => {
                                $i.snippet(`export namespace ${$d.createIdentifier(escape(key))} {`)
                                $i.indent(($i) => {
                                    Local__Namespace($, depth + 1, $i)
                                })
                                $i.snippet(`}`)
                            })
                        })
                        break
                    case 'parent sibling':
                        pl.ss($, ($) => {
                            //if the name is the same, nothing needs to be done
                            if (key !== $.namespace.key) {
                                $i.line(``)
                                $i.line(`import ${$d.createIdentifier(escape(key))} = _p${depth - 1}_${$d.createIdentifier(escape($.namespace.key))}`)
                                if ($ns.__getEntry($.namespace.key, () => true, () => false)) {//contains
                                }

                            }
                            $.namespace.key
                        })
                        break
                    default: pl.au($[0])
                }
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
            $: g_in.T.Namespace__Selection,
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
            Local__Namespace($, 0, $i)
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
                                            $i.snippet(`readonly ${$d.createApostrophedString($.key)}: `)
                                            Type($.value, $p, $i)
                                        })
                                    })
                                })
                                $i.snippet(`}`)
                            }
                        })
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
                                    Namespace__Selection__Tail($.namespaces, $i)
                                    $i.snippet(`${$d.createIdentifier($.type.key)}`)

                                    function mergeTypeArguments($: g_in.T.Namespace__Selection): pt.Dictionary<g_in.T.Type__Arguments.D> {
                                        return $d.mergeAndIgnore({
                                            'primary': pl.optional(
                                                $.tail,
                                                ($) => mergeTypeArguments($),
                                                () => pm.wrapRawDictionary({})
                                            ),
                                            'secondary': $.arguments,
                                        })
                                    }
                                    Type__Arguments(mergeTypeArguments($.namespaces), $p, $i)
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

        const Type__Arguments = (
            $: g_in.T.Type__Arguments,
            $p: {
                'type parameters': g_in.T.Type__Parameters
            },
            $i: g_fp.SYNC.I.Line
        ) => {
            $d.enrichedDictionaryForEach($, {
                'onEmpty': () => {

                },
                'onNotEmpty': ($c) => {
                    $i.snippet(`<`)
                    $i.indent(($i) => {

                        $c(($) => {
                            $i.nestedLine(($i) => {
                                Type($.value.content.type, $p, $i)
                                $i.snippet(`${$.isLast ? `` : `, `}`)
                            })
                        })
                    })
                    $i.snippet(`>`)
                }
            })
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