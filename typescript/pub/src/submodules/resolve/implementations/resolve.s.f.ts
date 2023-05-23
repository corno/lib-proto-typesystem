import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"


function mapResultOptional<T, RT, Result>(
    $: pt.OptionalValue<T>,
    res: Result,
    a: ($: ReturningType<T, Result>) => ReturningType<RT, Result>,
): ReturningType<pt.OptionalValue<RT>, Result> {
    return pl.optional(
        $,
        ($): ReturningType<pt.OptionalValue<RT>, Result> => {
            const out = a({
                'content': $,
                'result': res,
            })
            return {
                'content': [true, out.content],
                'result': out.result
            }
        },
        () => ({
            'result': res,
            'content': [false]
        })
    )
}

type Reference<T> = {
    'referent': T,
    'key': string
}

type ReturningType<T, RT> = {
    'content': T,
    'result': RT,
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
            'resolved namespaces': g_out.T.Local__Namespace.namespaces,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Type__Parameters,
        },
    ) => g_out.T.Function__Declaration

    export type Local__Namespace<Annotation> = (
        $: g_in.T.Local__Namespace<Annotation>,
        $p: {
            'resolved sibling namespaces': pt.OptionalValue<pt.Lookup<g_out.T.Namespace__2>>,
            'parent type parameters': pt.OptionalValue<g_out.T.Aggregated__Type__Parameters>,

        },
    ) => g_out.T.Local__Namespace

    export type Namespace__2<Annotation> = (
        $: g_in.T.Namespace__2<Annotation>,
        $p: {
            'resolved parent sibling namespaces': pt.OptionalValue<pt.Lookup<g_out.T.Namespace__2>>,
        },
    ) => g_out.T.Namespace__2

    export type Namespace__Selection<Annotation> = (
        $: g_in.T.Namespace__Selection<Annotation>,
        $p: {
            'resolved namespaces': g_out.T.Local__Namespace.namespaces,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Type__Parameters,
        },
    ) => ReturningType<g_out.T.Namespace__Selection, g_out.T.Local__Namespace>

    //export type Namespace__Selection = (
    //     $: g_in.T.Namespace__Selection<Annotation>,
    //     $p: {
    //         'resolved sibling namespaces': pt.Lookup<g_out.T.Namespace__2>,
    //     },
    // ) => ReturningType<g_out.T.Namespace__Selection, null>
    export type Type<Annotation> = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'resolved namespaces': g_out.T.Local__Namespace.namespaces,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
            'type parameters': g_out.T.Type__Parameters,
        },
    ) => g_out.T.Type

    export type Type__Parameters<Annotation> = (
        $: g_in.T.Type__Parameters<Annotation>,
        $p: {
            'parent type parameters': pt.OptionalValue<g_out.T.Aggregated__Type__Parameters>,
        }
    ) => g_out.T.Type__Parameters

}

type Res<Annotation> = {
    Function__Declaration: Resolve.Function__Declaration<Annotation>
    Local__Namespace: Resolve.Local__Namespace<Annotation>
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


    const Function__Declaration: Resolve.Function__Declaration<Annotation> = ($, $p) => {
        const $tp = Type__Parameters(
            $['type parameters'],
            {
                'parent type parameters': [true, $p['type parameters'].aggregated]
            }
        )
        return {
            'type parameters': $tp,
            'context': Type(
                $.context,
                {
                    'resolved namespaces': $p['resolved namespaces'],
                    'cyclic sibling types': $p['cyclic sibling types'],
                    'resolved sibling types': $p['resolved sibling types'],
                    'type parameters': $tp
                },
            ),
            'parameters': $.parameters.dictionary.map(($) => Type(
                $,
                {
                    'resolved namespaces': $p['resolved namespaces'],
                    'cyclic sibling types': $p['cyclic sibling types'],
                    'resolved sibling types': $p['resolved sibling types'],
                    'type parameters': $tp
                },
            ))
        }
    }

    const Local__Namespace: Resolve.Local__Namespace<Annotation> = ($, $p) => {
        const $v_parameters = Type__Parameters(
            $.parameters,
            {
                'parent type parameters': $p['parent type parameters'],
            }
        )
        const v_namespaces: g_out.T.Local__Namespace.namespaces = $d.resolveDictionary($.namespaces.dictionary, {
            'map': ($, $l): g_out.T.Local__Namespace.namespaces.D => {
                return pl.cc($.value, ($) => {

                    switch ($[0]) {
                        case 'local': return pl.ss($, ($): g_out.T.Local__Namespace.namespaces.D => ['local', Local__Namespace(
                            $,
                            {
                                'resolved sibling namespaces': [true, $l['non circular siblings']],
                                'parent type parameters': [true, $v_parameters.aggregated],
                            }
                        )])
                        case 'parent sibling': return pl.ss($, ($): g_out.T.Local__Namespace.namespaces.D => ['parent sibling', pl.cc($, ($): g_out.T.Namespace__2.parent__sibling => {
                            const x = $.namespace
                            return {
                                'namespace': mapOptional2NonOptional(
                                    $p['resolved sibling namespaces'],
                                    ($) => getAnnotatedEntry($, x),
                                )
                            }

                        })])
                        default: return pl.au($[0])
                    }
                })
            }
        })
        return {
            'parameters': $v_parameters,
            'namespaces': v_namespaces,
            'types': $d.resolveDictionary($.types.dictionary, {
                'map': (($, $l) => Type($.value, {
                    'resolved namespaces': v_namespaces,
                    'cyclic sibling types': $l['all siblings'],
                    'resolved sibling types': $l['non circular siblings'],
                    'type parameters': $v_parameters,
                }))
            })
        }
    }

    const Type: Resolve.Type<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'address function': return pl.ss($, ($) => ['address function', {
                'declaration': Function__Declaration(
                    $.declaration,
                    $p,
                ),
                'return type': Type($['return type'], $p)
            }])
            case 'array': return pl.ss($, ($) => ['array', Type($, $p)])
            case 'boolean': return pl.ss($, ($) => ['boolean', null])
            case 'computed': return pl.ss($, ($) => ['computed', Type($, $p)])
            case 'dictionary': return pl.ss($, ($) => ['dictionary', Type($, $p)])
            case 'group': return pl.ss($, ($) => ['group', $.dictionary.map(($) => Type($, $p))])
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
            case 'type parameter': return pl.ss($, ($) => ['type parameter', getAnnotatedEntry($p['type parameters'].aggregated, $)])
            case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($): g_out.T.Type.type__reference => {
                switch ($[0]) {
                    case 'cyclic sibling': return pl.ss($, ($) => ['cyclic sibling', getAnnotatedEntry($p['cyclic sibling types'], $)])
                    case 'external': return pl.ss($, ($) => {
                        const v_namespaces = Namespace__Selection(
                            $.namespaces,
                            {
                                'resolved namespaces': $p['resolved namespaces'],
                                'cyclic sibling types': $p['cyclic sibling types'],
                                'resolved sibling types': $p['resolved sibling types'],
                                'type parameters': $p['type parameters'],
                            }
                        )
                        return ['external', {
                            'namespaces': v_namespaces.content,

                            'type': getAnnotatedEntry(
                                v_namespaces.result.types,
                                $.type,
                            ),
                        }]
                    })
                    case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($p['resolved sibling types'], $)])
                    default: return pl.au($[0])
                }
            })
            ])
            case 'value function': return pl.ss($, ($) => ['value function', {
                'declaration': Function__Declaration(
                    $.declaration,
                    $p,
                ),
                'return type': Type($['return type'], $p)
            }])
            default: return pl.au($[0])
        }
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


    const Namespace__Selection: Resolve.Namespace__Selection<Annotation> = ($, $p) => {
        const v_namespace = getAnnotatedEntry($p['resolved namespaces'], $.namespace)

        function getSubnamespaces($: g_out.T.Namespace__2): g_out.T.Local__Namespace.namespaces {
            switch ($[0]) {
                case 'local': return pl.ss($, ($) => $.namespaces)
                case 'parent sibling': return pl.ss($, ($) => getSubnamespaces($.namespace.referent))
                default: return pl.au($[0])
            }
        }

        function getLocalNamespace($: g_out.T.Namespace__2): g_out.T.Local__Namespace {
            switch ($[0]) {
                case 'local': return pl.ss($, ($) => $)
                case 'parent sibling': return pl.ss($, ($) => getLocalNamespace($.namespace.referent))
                default: return pl.au($[0])
            }
        }

        const r_subnamespaces = getSubnamespaces(v_namespace.referent)

        const v_tail = mapResultOptional(
            $.tail,
            getLocalNamespace(v_namespace.referent),
            ($) => {
                const xx = Namespace__Selection($.content, {
                    'resolved namespaces': $p['resolved namespaces'],
                    'cyclic sibling types': $p['cyclic sibling types'],
                    'resolved sibling types': $p['resolved sibling types'],
                    'type parameters': $p['type parameters'],
                })
                return {
                    'content': xx.content,
                    'result': xx.result
                }
            },
        )
        function findNS($: g_out.T.Namespace__2): g_out.T.Local__Namespace {
            switch ($[0]) {
                case 'local': return pl.ss($, ($) => $)
                case 'parent sibling': return pl.ss($, ($) => findNS($.namespace.referent))
                default: return pl.au($[0])
            }
        }
        return {
            'content': {
                'namespace': v_namespace,
                'arguments': $.arguments.dictionary.__mapWithKey<g_out.T.Type__Arguments.D>(($, key) => {
                    return {
                        'constraints': {
                            'parameter': getEntry(
                                findNS(v_namespace.referent).parameters.local,
                                key,
                                $.annotation,
                            )
                        },
                        'content': {
                            'type': Type(
                                $.content.type,
                                {
                                    'resolved namespaces': $p['resolved namespaces'],
                                    'cyclic sibling types': $p['cyclic sibling types'],
                                    'resolved sibling types': $p['resolved sibling types'],
                                    'type parameters': $p['type parameters'],
                                }
                            )
                        }
                    }
                }),
                'tail': v_tail.content
            },
            'result': v_tail.result,
        }
    }
    return {
        Function__Declaration: Function__Declaration,
        Local__Namespace: Local__Namespace,
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


    return ($: g_in.T.Local__Namespace<Annotation>): g_out.T.Local__Namespace => {
        const res = resolve($d, $se)
        return res.Local__Namespace($, {
            'resolved sibling namespaces': [false],
            'parent type parameters': [false],
        })
    }
}