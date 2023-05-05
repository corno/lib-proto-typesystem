import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_model from "../../resolved"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.generate = ($d) => {
    type Generate_FunctionDeclaration = (
        $: g_model.T.Function__Declaration,
        $i: g_fp.SYNC.I.Line,
    ) => void
    type Generate_Namespace__Selection = (
        $: g_model.T.Namespace__Selection,
        $i: g_fp.SYNC.I.Line,
    ) => void
    type Generate_Type = (
        $: g_model.T.Type,
        $i: g_fp.SYNC.I.Line,
    ) => void

    const generate_Function__Declaration: Generate_FunctionDeclaration = ($, $i,) => {
        $d.enrichedDictionaryForEach($['type parameters'], {
            'onEmpty': () => { },
            'onNotEmpty': ($c) => {
                $i.snippet(`<`)
                $c(($) => {
                    $d.createIdentifier($.key)
                    $i.snippet($.isLast ? `` : `,`)
                })
                $i.snippet(`>`)
            }
        })
        $i.snippet(`(`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`$: `)
                generate_Type($.context, $i)
            })
            $d.enrichedDictionaryForEach($.parameters, {
                'onEmpty': () => { },
                'onNotEmpty': ($c) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`, $p: {`)
                        $i.indent(($i) => {
                            $c(($) => {
                                $i.nestedLine(($i) => {
                                    $d.createApostrophedString($.key)
                                    $i.snippet(`: `)
                                    generate_Type($.value, $i)
                                    $i.snippet(`,`)
                                })
                            })
                        })
                        $i.snippet(`}`)
                    })
                }
            })
        })
        $i.snippet(`) => `)
    }
    const generate_Namespace__Selection: Generate_Namespace__Selection= ($, $i) => {
        //$i.snippet($d.createIdentifier($.namespace.key))
        pl.optional(
            $.tail,
            ($) => {
                $i.snippet(`.`)
                generate_Namespace__Selection($, $i)
            },
            () => {

            }
        )
    }
    const generate_Type: Generate_Type = (
        $,
        $i,
    ) => {
        switch ($[0]) {
            case 'address function':
                pl.ss($, ($) => {
                    generate_Function__Declaration($.declaration, $i)
                    generate_Type($['return type'], $i)
                })
                break
            case 'array':
                pl.ss($, ($) => {
                    $i.snippet(`pt.Array<`)
                    generate_Type($, $i)
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
                    $i.snippet(`pt.Dictionary<`)
                    generate_Type($, $i)
                    $i.snippet(`>`)
                })
                break
            case 'group':
                pl.ss($, ($) => {
                    $i.snippet(`{`)
                    $i.indent(($i) => {
                        $d.dictionaryForEach($, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`readonly ${$d.createApostrophedString($.key)}: `)
                                generate_Type($.value, $i)
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`}`)
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
                    $i.snippet(`pt.OptionalValue<`)
                    generate_Type($, $i)
                    $i.snippet(`>`)
                })
                break
            case 'procedure':
                pl.ss($, ($) => {
                    generate_Function__Declaration($.declaration, $i)
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
                    $i.indent(($i) => {
                        $d.dictionaryForEach($, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`| [ ${$d.createApostrophedString($.key)}, `)
                                generate_Type($.value, $i)
                                $i.snippet(`]`)
                            })
                        })
                    })
                })
                break
            case 'type reference':
                pl.ss($, ($) => {
                    switch ($[0]) {
                        // case 'cyclic sibling':
                        //     pl.ss($, ($) => {
                        //         $i.snippet($d.createIdentifier($.key))
                        //     })
                        //     break
                        // case 'sibling':
                        //     pl.ss($, ($) => {
                        //         $i.snippet($d.createIdentifier($.key))
                        //     })
                        //     break
                        case 'external':
                            pl.ss($, ($) => {
                                generate_Namespace__Selection($.namespaces, $i)
                                //$i.snippet(`.${$d.createIdentifier($.type.key)}`)
                            })
                            break
                        default: pl.au($[0])
                    }
                    $i.snippet(`FIXME`)
                })
                break
            case 'value function':
                pl.ss($, ($) => {
                    generate_Function__Declaration($.declaration, $i)
                    generate_Type($['return type'], $i)
                })
                break
            default: pl.au($[0])
        }
    }
    return ($, $i) => {
        const parameters = $.parameters
        $i.line(`import * as pt from 'pareto-core-types'`)
        $d.dictionaryForEach($.namespaces, () => {

        })
        $d.dictionaryForEach($.types, ($) => {
            $i.line(``)
            $i.nestedLine(($i) => {
                $i.snippet(`type ${$d.createIdentifier($.key)}`)
                $d.dictionaryForEach(parameters, ($) => {

                })
                $i.snippet(` = `)
                generate_Type($.value, $i)
            })
        })
    }
}