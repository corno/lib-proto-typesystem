import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"


function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional($, ($): pt.OptionalValue<RT> => [true, a($)], () => [false])
}

export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>) => {
    type Map_Function__Declaration = ($: g_in.T.Function__Declaration<Annotation>) => g_out.T.Function__Declaration
    type Map_Namespace = ($: g_in.T.Namespace<Annotation>) => g_out.T.Namespace
    type Map_Namespace__Selection = ($: g_in.T.Namespace__Selection<Annotation>) => g_out.T.Namespace__Selection
    type Map_Type = ($: g_in.T.Type<Annotation>) => g_out.T.Type
    type Map_Type__Parameters = ($: g_in.T.Type__Parameters<Annotation>) => g_out.T.Type__Parameters

    const map_Function__Declaration: Map_Function__Declaration = ($) => {
        return {
            'type parameters': map_Type__Parameters($['type parameters']),
            'context': map_Type($.context),
            'parameters': $.parameters.map(($) => map_Type($))
        }
    }

    const map_Namespace: Map_Namespace = ($) => {
        return {
            'namespaces': $.namespaces.map(($) => {
                switch ($[0]) {
                    case 'local': return pl.ss($, ($) => ['local', map_Namespace($)])
                    default: return pl.au($[0])
                }
            }),
            'parameters': $.parameters.map(($) => null),
            'types': $.types.map(($) => map_Type($))
        }
    }

    const map_Namespace__Selection: Map_Namespace__Selection = ($) => {
        return {
            'tail': mapOptional(
                $.tail,
                ($) => map_Namespace__Selection($),
            )
        }
    }

    const map_Type: Map_Type = ($) => {
        switch ($[0]) {
            case 'address function': return pl.ss($, ($) => ['address function', {
                'declaration': map_Function__Declaration($.declaration),
                'return type': map_Type($['return type'])
            }])
            case 'array': return pl.ss($, ($) => ['array', map_Type($)])
            case 'boolean': return pl.ss($, ($) => ['boolean', null])
            case 'dictionary': return pl.ss($, ($) => map_Type($))
            case 'group': return pl.ss($, ($) => ['group', $.map(($) => map_Type($))])
            case 'null': return pl.ss($, ($) => ['null', null])
            case 'number': return pl.ss($, ($) => ['number', null])
            case 'optional': return pl.ss($, ($) => ['optional', map_Type($)])
            case 'procedure': return pl.ss($, ($) => ['procedure', {
                'declaration': map_Function__Declaration($.declaration)
            }])
            case 'string': return pl.ss($, ($) => ['string', null])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => map_Type($))])
            case 'type reference': return pl.ss($, ($) => ['type reference', pl.cc($, ($): g_out.T.Type.type__reference => {
                    switch ($[0]) {
                        //case 'cyclic sibling': return pl.ss($, ($) => pd.implementMe(`case`))
                        case 'external': return pl.ss($, ($) => ['external', {
                            'namespaces': map_Namespace__Selection($.namespaces)
                        }])
                        //case 'sibling': return pl.ss($, ($) => pd.implementMe(`case`))
                        default: return pl.au($[0])
                    }
                })
            ])
            case 'value function': return pl.ss($, ($) => ['value function', {
                'declaration': map_Function__Declaration($.declaration),
                'return type': map_Type($['return type'])
            }])
            default: return pl.au($[0])
        }
    }

    const map_Type__Parameters: Map_Type__Parameters = ($) => $.map(($) => null)

    return ($) => map_Namespace($)
}