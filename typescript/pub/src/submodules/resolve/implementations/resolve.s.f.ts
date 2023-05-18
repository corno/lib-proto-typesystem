import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

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

export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {


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


    type Map_Function__Declaration = (
        $: g_in.T.Function__Declaration<Annotation>,
        $p: {
            'resolved namespaces': g_out.T.Local__Namespace.namespaces,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
        },
    ) => g_out.T.Function__Declaration

    type Map_Local__Namespace = (
        $: g_in.T.Local__Namespace<Annotation>,
        $p: {
            'resolved sibling namespaces': pt.OptionalValue<pt.Lookup<g_out.T.Namespace__2>>,
        },
    ) => g_out.T.Local__Namespace

    type Map_Namespace__2 = (
        $: g_in.T.Namespace__2<Annotation>,
        $p: {
            'resolved parent sibling namespaces': pt.OptionalValue<pt.Lookup<g_out.T.Namespace__2>>,
        },
    ) => g_out.T.Namespace__2

    type Map_Namespace__Selection__Tail = (
        $: g_in.T.Namespace__Selection__Tail<Annotation>,
        $p: {
            'namespaces': g_out.T.Local__Namespace.namespaces,
        },
    ) => ReturningType<g_out.T.Namespace__Selection__Tail, g_out.T.Local__Namespace>

    // type Map_Namespace__Selection = (
    //     $: g_in.T.Namespace__Selection<Annotation>,
    //     $p: {
    //         'resolved sibling namespaces': pt.Lookup<g_out.T.Namespace__2>,
    //     },
    // ) => ReturningType<g_out.T.Namespace__Selection, null>
    type Map_Type = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'resolved namespaces': g_out.T.Local__Namespace.namespaces,
            'resolved sibling types': pt.Lookup<g_out.T.Type>,
            'cyclic sibling types': pt.Lookup<() => g_out.T.Type>,
        },
    ) => g_out.T.Type
    type Map_Type__Parameters = ($: g_in.T.Type__Parameters<Annotation>) => g_out.T.Type__Parameters

    const map_Function__Declaration: Map_Function__Declaration = ($, $p) => {
        return {
            'type parameters': map_Type__Parameters($['type parameters']),
            'context': map_Type(
                $.context,
                $p,
            ),
            'parameters': $.parameters.dictionary.map(($) => map_Type(
                $,
                $p
            ))
        }
    }

    const map_Local__Namespace: Map_Local__Namespace = ($, $p) => {
        const v_namespaces: g_out.T.Local__Namespace.namespaces = $d.resolveDictionary($.namespaces.dictionary, {
            'map': ($, $l): g_out.T.Local__Namespace.namespaces.D => {
                return pl.cc($.value, ($) => {

                    switch ($[0]) {
                        case 'local': return pl.ss($, ($): g_out.T.Local__Namespace.namespaces.D => ['local', map_Local__Namespace(
                            $,
                            {
                                'resolved sibling namespaces': [true, $l['non circular siblings']],
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
            'namespaces': v_namespaces,
            'parameters': $.parameters.dictionary.map(($) => null),
            'types': $d.resolveDictionary($.types.dictionary, { 'map': (($, $l) => map_Type($.value, {
                'resolved namespaces': v_namespaces,
                'cyclic sibling types': $l['all siblings'],
                'resolved sibling types': $l['non circular siblings'],
            }))})
        }
    }

    const map_Type: Map_Type = ($, $p) => {
        switch ($[0]) {
            case 'address function': return pl.ss($, ($) => ['address function', {
                'declaration': map_Function__Declaration(
                    $.declaration,
                    $p,
                ),
                'return type': map_Type($['return type'], $p)
            }])
            case 'array': return pl.ss($, ($) => ['array', map_Type($, $p)])
            case 'boolean': return pl.ss($, ($) => ['boolean', null])
            case 'dictionary': return pl.ss($, ($) => map_Type($, $p))
            case 'group': return pl.ss($, ($) => ['group', $.dictionary.map(($) => map_Type($, $p))])
            case 'null': return pl.ss($, ($) => ['null', null])
            case 'number': return pl.ss($, ($) => ['number', null])
            case 'optional': return pl.ss($, ($) => ['optional', map_Type($, $p)])
            case 'procedure': return pl.ss($, ($) => ['procedure', {
                'declaration': map_Function__Declaration(
                    $.declaration,
                    $p,
                )
            }])
            case 'string': return pl.ss($, ($) => ['string', null])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.dictionary.map(($) => map_Type($, $p))])
            case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($): g_out.T.Type.type__reference => {
                switch ($[0]) {
                    case 'cyclic sibling': return pl.ss($, ($) => ['cyclic sibling', getAnnotatedEntry($p['cyclic sibling types'], $)])
                    case 'external': return pl.ss($, ($) => {
                        pd.logDebugMessage(`>>>>>> ${$.type.key}`)
                        const v_namespaces = map_Namespace__Selection__Tail(
                            $.namespaces,
                            {
                                'namespaces': $p['resolved namespaces']
                            }
                        )
                        return ['external', {
                            'namespaces': v_namespaces.content,
                            'type': getAnnotatedEntry(
                                v_namespaces.result.types,
                                $.type,
                            )
                        }]
                    })
                    case 'sibling': return pl.ss($, ($) => ['sibling', getAnnotatedEntry($p['resolved sibling types'], $)])
                    default: return pl.au($[0])
                }
            })
            ])
            case 'value function': return pl.ss($, ($) => ['value function', {
                'declaration': map_Function__Declaration(
                    $.declaration,
                    $p,
                ),
                'return type': map_Type($['return type'], $p)
            }])
            default: return pl.au($[0])
        }
    }

    const map_Type__Parameters: Map_Type__Parameters = ($) => $.dictionary.map(($) => null)


    const map_Namespace__Selection__Tail: Map_Namespace__Selection__Tail = ($, $p) => {
        const v_namespace = getAnnotatedEntry($p.namespaces, $.namespace)

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
                const xx = map_Namespace__Selection__Tail($.content, {
                    'namespaces': r_subnamespaces,
                })
                return {
                    'content': xx.content,
                    'result': xx.result
                }
            },
        )

        return {
            'content': {
                'namespace': v_namespace,
                'tail': v_tail.content
            },
            'result': v_tail.result,
        }
    }
    // const map_Namespace__Selection: Map_Namespace__Selection = ($, $p) => {
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
    //                 'content': map_Namespace__Selection__Tail($, {
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
        return map_Local__Namespace($, {
            'resolved sibling namespaces': [false],
        })
    }
}