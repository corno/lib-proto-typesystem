import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"


// function mapResultOptional<T, RT, Result>(
//     $: pt.OptionalValue<T>,
//     res: Result,
//     a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
// ): ReturningType<pt.OptionalValue<RT>, Result> {
//     return pl.optional(
//         $,
//         ($): ReturningType<pt.OptionalValue<RT>, Result> => {
//             const out = a({
//                 'content': $,
//                 'result': res,
//             })
//             return {
//                 'content': [true, out.content],
//                 'result': out.result
//             }
//         },
//         () => ({
//             'result': res,
//             'content': [false]
//         })
//     )
// }

type Reference<T> = {
    'referent': T,
    'key': string
}

function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional($, ($): pt.OptionalValue<RT> => [true, a($)], () => [false])
}

function mapOptional2NonOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): RT {
    return pl.optional($, ($): RT => a($), () => pl.panic("SFSDSFDF"))
}

namespace Resolve {

    export type Function__Declaration<Annotation> = (
        $: g_in.T.Function__Declaration<Annotation>,
        $p: {
            'local namespaces': g_out.T.Namespace.namespaces,
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Aggregated__Type__Parameters,
        },
    ) => g_out.T.Function__Declaration

    export type Namespace<Annotation> = (
        $: g_in.T.Namespace<Annotation>,
        $p: {
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'parent type parameters': pt.OptionalValue<g_out.T.Aggregated__Type__Parameters>,

        },
    ) => g_out.T.Namespace

    // export type Namespace__2<Annotation> = (
    //     $: g_in.T.Namespace__2<Annotation>,
    //     $p: {
    //         'resolved parent sibling namespaces': pt.OptionalValue<pt.Lookup<g_out.T.Namespace__2>>,
    //     },
    // ) => g_out.T.Namespace__2

    export type Namespace__Selection<Annotation> = (
        $: g_in.T.Namespace__Selection<Annotation>,
        $p: {
            'local namespaces': g_out.T.Namespace.namespaces,
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Aggregated__Type__Parameters,
        },
    ) => g_out.T.Namespace__Selection

    export type Namespace__Selection__Tail<Annotation> = (
        $: g_in.T.Namespace__Selection__Tail<Annotation>,
        $p: {
            'selectable namespaces': g_out.T.Namespace.namespaces,

            'local namespaces': g_out.T.Namespace.namespaces,
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Aggregated__Type__Parameters,
        },
    ) => g_out.T.Namespace__Selection__Tail

    //export type Namespace__Selection = (
    //     $: g_in.T.Namespace__Selection<Annotation>,
    //     $p: {
    //         'resolved sibling namespaces': pt.Lookup<g_out.T.Namespace__2>,
    //     },
    // ) => ReturningType<g_out.T.Namespace__Selection, null>
    export type Type<Annotation> = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'local namespaces': g_out.T.Namespace.namespaces,
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Aggregated__Type__Parameters,
        },
    ) => g_out.T.Type

    export type Type__Arguments<Annotation> = (
        $: g_in.T.Type__Arguments<Annotation>,
        $p: {
            'local namespaces': g_out.T.Namespace.namespaces,
            'imported namespaces': pt.OptionalValue<g_out.T.Imports>,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'available type parameters': g_out.T.Aggregated__Type__Parameters,
            'type parameters to be matched': g_out.T.Aggregated__Type__Parameters,
        }
    ) => g_out.T.Type__Arguments

    export type Type__Parameters<Annotation> = (
        $: g_in.T.Type__Parameters<Annotation>,
        $p: {
            'parent type parameters': pt.OptionalValue<g_out.T.Aggregated__Type__Parameters>,
        }
    ) => g_out.T.Type__Parameters

}

type Res<Annotation> = {
    Function__Declaration: Resolve.Function__Declaration<Annotation>
    Namespace: Resolve.Namespace<Annotation>
}

function resolve<Annotation>(
    $d: D.resolve<Annotation>,
    $se: {
        onError: g_this.SYNC.I.OnError<Annotation>
    }
): Res<Annotation> {

    function getEntry<T>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
        return $.__getEntry(
            key,
            ($) => $,
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': annotation,
                    'message': ['no such entry', {
                        'key': key
                    }]
                })
                return pl.panic(`No Such Entry: ${key}`)
            }
        )
    }


    function getAnnotatedEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return $.__getEntry(
            key.key,
            ($) => {
                return {
                    'key': key.key,
                    'referent': $
                }
            },
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': key.annotation,
                    'message': ['no such entry', {
                        'key': key.key
                    }]
                })
                return pl.panic(`No Such Entry: ${key.key}`)
            }
        )
    }



    function selectNS2FromSelectionTail($: g_out.T.Namespace__Selection__Tail): g_out.T.Namespace {
        return pl.optional(
            $.tail,
            ($) => selectNS2FromSelectionTail($),
            () => $.namespace.referent.namespace
        )
    }

    function selectNS2FromImport($: g_out.T.Import): g_out.T.Namespace {
        switch ($[0]) {
            case 'parent import': return pl.ss($, ($) => selectNS2FromImport($.referent))
            case 'sibling': return pl.ss($, ($) => $.referent.namespace)
            default: return pl.au($[0])
        }
    }

    function selectNS2FromSelection($: g_out.T.Namespace__Selection): g_out.T.Namespace {
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

    const Function__Declaration: Resolve.Function__Declaration<Annotation> = ($, $p) => {
        const $tp = Type__Parameters(
            $['type parameters'],
            {
                'parent type parameters': [true, $p['type parameters']]
            }
        )
        return {
            'type parameters': $tp,
            'context': Type(
                $.context,
                {
                    'local namespaces': $p['local namespaces'],
                    'imported namespaces': $p['imported namespaces'],
                    'cyclic sibling types': $p['cyclic sibling types'],
                    'resolved sibling types': $p['resolved sibling types'],
                    'type parameters': $tp.aggregated
                },
            ),
            'parameters': $.parameters.dictionary.map(($) => Type(
                $,
                {
                    'local namespaces': $p['local namespaces'],
                    'imported namespaces': $p['imported namespaces'],
                    'cyclic sibling types': $p['cyclic sibling types'],
                    'resolved sibling types': $p['resolved sibling types'],
                    'type parameters': $tp.aggregated
                },
            ))
        }
    }

    const Namespace: Resolve.Namespace<Annotation> = ($, $p) => {
        const $v_parameters = Type__Parameters(
            $.parameters,
            {
                'parent type parameters': $p['parent type parameters'],
            }
        )
        const v_namespaces: g_out.T.Namespace.namespaces = $d.resolveDictionary($.namespaces.dictionary, {
            'map': ($, $l): g_out.T.Namespace.namespaces.D => {
                const v_imports: g_out.T.Imports = $d.mergeAndIgnore({
                    'primary': $.value.imports.dictionary.map(($) => {
                        switch ($[0]) {
                            case 'parent import': return pl.ss($, ($) => {
                                const xx = $
                                return ['parent import', mapOptional2NonOptional(
                                    $p['imported namespaces'],
                                    ($) => getAnnotatedEntry($, xx)
                                )]
                            })
                            case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($l['non circular siblings'], $)])
                            default: return pl.au($[0])
                        }
                    }),
                    'secondary': pl.optional(
                        $p['imported namespaces'],
                        ($) => $.__mapWithKey(($, key) => ['parent import', {
                            'key': key,
                            'referent': $,
                        }]),
                        () => pm.wrapRawDictionary({})
                    )
                })
                const v_ns = Namespace(
                    $.value.namespace,
                    {
                        'imported namespaces': [true, v_imports],
                        //'resolved sibling namespaces': [true, $l['non circular siblings']],
                        'parent type parameters': [true, $v_parameters.aggregated],
                    }
                )
                return {
                    'imports': v_imports,
                    'namespace': v_ns,
                }

            }
        })
        return {
            'parameters': $v_parameters,
            'namespaces': v_namespaces,
            'types': $d.resolveDictionary($.types.dictionary, {
                'map': (($, $l) => Type($.value, {
                    'local namespaces': v_namespaces,
                    'imported namespaces': $p['imported namespaces'],
                    'cyclic sibling types': $l['all siblings'],
                    'resolved sibling types': $l['non circular siblings'],
                    'type parameters': $v_parameters.aggregated,
                }))
            })
        }
    }

    const Type: Resolve.Type<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'address function': return pl.ss($, ($) => {
                const $v_fd = Function__Declaration(
                    $.declaration,
                    $p,
                )
                return ['address function', {
                    'declaration': $v_fd,
                    'return type': Type($['return type'], {
                        'local namespaces': $p['local namespaces'],
                        'imported namespaces': $p['imported namespaces'],
                        'cyclic sibling types': $p['cyclic sibling types'],
                        'resolved sibling types': $p['resolved sibling types'],
                        'type parameters': $v_fd['type parameters'].aggregated
                    })
                }]
            })
            case 'array': return pl.ss($, ($) => ['array', Type($, $p)])
            case 'boolean': return pl.ss($, ($) => ['boolean', null])
            case 'computed': return pl.ss($, ($) => ['computed', Type($, $p)])
            case 'dictionary': return pl.ss($, ($) => ['dictionary', Type($, $p)])
            case 'group': return pl.ss($, ($) => ['group', $.dictionary.map(($) => ({
                'type': Type($.type, $p),
                'mutable': $.mutable,
            }))])
            case 'lookup': return pl.ss($, ($) => ['lookup', Type($, $p)])

            case 'null': return pl.ss($, ($) => ['null', null])
            case 'number': return pl.ss($, ($) => ['number', null])
            case 'optional': return pl.ss($, ($) => ['optional', Type($, $p)])
            case 'procedure': return pl.ss($, ($) => ['procedure', {
                'declaration': Function__Declaration(
                    $.declaration,
                    $p,
                )
            }])
            case 'string': return pl.ss($, ($) => ['string', null])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.dictionary.map(($) => Type($, $p))])
            case 'type parameter': return pl.ss($, ($) => ['type parameter', getAnnotatedEntry($p['type parameters'], $)])
            case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($): g_out.T.Type.type__reference => {
                switch ($[0]) {
                    case 'cyclic sibling': return pl.ss($, ($) => ['cyclic sibling', getAnnotatedEntry($p['cyclic sibling types'], $)])
                    case 'external': return pl.ss($, ($) => {
                        const v_namespaces = Namespace__Selection(
                            $['namespace path'],
                            {
                                'local namespaces': $p['local namespaces'],
                                //'context namespaces': $p['local namespaces'],
                                'imported namespaces': $p['imported namespaces'],
                                'cyclic sibling types': $p['cyclic sibling types'],
                                'resolved sibling types': $p['resolved sibling types'],
                                'type parameters': $p['type parameters'],
                            }
                        )
                        return ['external', {
                            'namespace path': v_namespaces,

                            'type': getAnnotatedEntry(
                                selectNS2FromSelection(v_namespaces).types,
                                $.type,
                            ),
                        }]
                    })
                    case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($p['resolved sibling types'], $)])
                    default: return pl.au($[0])
                }
            })
            ])
            case 'value function': return pl.ss($, ($) => {
                const $v_fd = Function__Declaration(
                    $.declaration,
                    $p,
                )
                return ['value function', {
                    'declaration': $v_fd,
                    'return type': Type($['return type'], {
                        'local namespaces': $p['local namespaces'],
                        'imported namespaces': $p['imported namespaces'],
                        'cyclic sibling types': $p['cyclic sibling types'],
                        'resolved sibling types': $p['resolved sibling types'],
                        'type parameters': $v_fd['type parameters'].aggregated
                    })
                }]
            })
            default: return pl.au($[0])
        }
    }

    const Type__Arguments: Resolve.Type__Arguments<Annotation> = ($, $p) => {
        return $.dictionary.__mapWithKey<g_out.T.Type__Arguments.D>(($, key) => {
            return {
                'constraints': {
                    'parameter': getEntry(
                        $p['type parameters to be matched'],
                        key,
                        $.annotation,
                    )
                },
                'content': {
                    'type': Type(
                        $.content.type,
                        {
                            'resolved sibling types': $p['resolved sibling types'],
                            'cyclic sibling types': $p['cyclic sibling types'],
                            'imported namespaces': $p['imported namespaces'],
                            'local namespaces': $p['local namespaces'],
                            'type parameters': $p['available type parameters'],
                        }
                    )
                }
            }
        })
    }

    const Type__Parameters: Resolve.Type__Parameters<Annotation> = ($, $p) => {
        return {
            'local': $.local.dictionary.map(($) => null),
            'aggregated': $d.mergeAndIgnore({
                'primary': $.local.dictionary,
                'secondary': pl.optional(
                    $p['parent type parameters'],
                    ($) => $,
                    () => pm.wrapRawDictionary({}),
                )
            }).map(($) => null)
        }
    }


    const Namespace__Selection__Tail: Resolve.Namespace__Selection__Tail<Annotation> = ($, $p) => {
        const v_namespace = getAnnotatedEntry($p['selectable namespaces'], $.namespace)

        const v_tail = mapOptional(
            $.tail,
            ($) => Namespace__Selection__Tail($, {
                'selectable namespaces': v_namespace.referent.namespace.namespaces,
                'resolved sibling types': $p['resolved sibling types'],
                'cyclic sibling types': $p['cyclic sibling types'],
                'imported namespaces': $p['imported namespaces'],
                'local namespaces': $p['local namespaces'],
                'type parameters': $p['type parameters'],
            }),
        )
        return {
            'namespace': v_namespace,
            'arguments': Type__Arguments($.arguments, {
                'resolved sibling types': $p['resolved sibling types'],
                'cyclic sibling types': $p['cyclic sibling types'],
                'imported namespaces': $p['imported namespaces'],
                'local namespaces': $p['local namespaces'],
                'type parameters to be matched': v_namespace.referent.namespace.parameters.local,
                'available type parameters': $p['type parameters'],
            }),
            'tail': v_tail
        }
    }
    const Namespace__Selection: Resolve.Namespace__Selection<Annotation> = ($, $p) => {
        return {
            'start': pl.cc($.start, ($) => {
                switch ($[0]) {
                    case 'import': return pl.ss($, ($) => {
                        const foo = $
                        const v_namespace = mapOptional2NonOptional(
                            $p['imported namespaces'],
                            ($) => getAnnotatedEntry($, foo.namespace)
                        )
                        return ['import', {
                            'namespace': v_namespace,
                            'arguments': Type__Arguments($.arguments, {
                                'local namespaces': $p['local namespaces'],
                                'cyclic sibling types': $p['cyclic sibling types'],
                                'imported namespaces': $p['imported namespaces'],
                                'resolved sibling types': $p['resolved sibling types'],
                                'type parameters to be matched': selectNS2FromImport(v_namespace.referent).parameters.local,
                                'available type parameters': $p['type parameters']
                            }),
                            'tail': mapOptional(
                                $.tail,
                                ($) => Namespace__Selection__Tail($, {
                                    'selectable namespaces': selectNS2FromImport( v_namespace.referent).namespaces,
                                    'local namespaces': $p['local namespaces'],
                                    'cyclic sibling types': $p['cyclic sibling types'],
                                    'imported namespaces': $p['imported namespaces'],
                                    'resolved sibling types': $p['resolved sibling types'],
                                    'type parameters': $p['type parameters']
                                })
                            ),
                        }]
                    })
                    case 'local': return pl.ss($, ($) => {
                        return ['local', {
                            'namespace': Namespace__Selection__Tail($.namespace, {
                                'selectable namespaces': $p['local namespaces'],
                                'local namespaces': $p['local namespaces'],
                                'cyclic sibling types': $p['cyclic sibling types'],
                                'imported namespaces': $p['imported namespaces'],
                                'resolved sibling types': $p['resolved sibling types'],
                                'type parameters': $p['type parameters']
                            })
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
        // const v_namespace = getAnnotatedEntry($p['resolved namespaces'], $.namespace)

        // const v_tail = mapOptional(
        //     $.tail,
        //     //getLocalNamespace(v_namespace.referent),
        //     ($) => Namespace__Selection($, {
        //         'resolved namespaces': selectLocalNSFromNS2(v_namespace.referent).namespaces,
        //         'cyclic sibling types': $p['cyclic sibling types'],
        //         'resolved sibling types': $p['resolved sibling types'],
        //         'type parameters': $p['type parameters'],
        //     }),
        // )
        // return {
        //     'namespace': v_namespace,
        //     'arguments': $.arguments.dictionary.__mapWithKey<g_out.T.Type__Arguments.D>(($, key) => {
        //         return {
        //             'constraints': {
        //                 'parameter': getEntry(
        //                     v_namespace.referent.namespace.parameters.local,
        //                     key,
        //                     $.annotation,
        //                 )
        //             },
        //             'content': {
        //                 'type': Type(
        //                     $.content.type,
        //                     {
        //                         'local namespaces': $p['local namespaces'],
        //                         'imported namespaces': $p['imported namespaces'],
        //                         'cyclic sibling types': $p['cyclic sibling types'],
        //                         'resolved sibling types': $p['resolved sibling types'],
        //                         'type parameters': $p['type parameters'],
        //                     }
        //                 )
        //             }
        //         }
        //     }),
        //     'tail': v_tail
        // }
    }
    return {
        Function__Declaration: Function__Declaration,
        Namespace: Namespace,
    }
}

export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {


    // const Namespace__Selection: Resolve.Namespace__Selection = ($, $p) => {
    //     const v_namespace = getAnnotatedEntry($p['resolved sibling namespaces'], $.namespace)

    //     function getLocalNamespace($: g_out.T.Namespace__2): g_out.T.Local__Namespace {
    //         switch ($[0]) {
    //             case 'local': return pl.ss($, ($) => $)
    //             case 'parent sibling': return pl.ss($, ($) => $.namespace.referent)
    //             default: return pl.au($[0])
    //         }
    //     }
    //     const r_subnamespaces = getLocalNamespace(v_namespace.referent).namespaces

    //     const v_tail = mapResultOptional(
    //         $.tail,
    //         v_namespace,
    //         ($) => {
    //             return {
    //                 'content': Namespace__Selection($, {
    //                     'namespaces': r_subnamespaces,
    //                 }),
    //                 'result': x
    //             }
    //         },
    //     )

    //     return {
    //         'content': {
    //             'namespace': v_namespace,
    //             'tail': v_tail
    //         },
    //         'result': getLocalNamespace($)
    //     }
    // }


    return ($: g_in.T.Namespace<Annotation>): g_out.T.Namespace => {
        const res = resolve($d, $se)
        return res.Namespace($, {
            'imported namespaces': [false],
            'parent type parameters': [false],
        })
    }
}