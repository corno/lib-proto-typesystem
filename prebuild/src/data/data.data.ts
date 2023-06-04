import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as g_pareto_lang_data_settings from "lib-pareto-lang-data/dist/submodules/2submodules"
import * as g_pareto_lang_data from "lib-pareto-lang-data"

import { $ as d_model } from "./models/model.data"

const d = pd.d
const a = pd.a

export const $: g_pareto_lang_data_settings.T.GenerateSubmodulesParameters = {
    'path': a([`../../pareto/src/data/submodules`]),
    'data': {
        'library': g_pareto_lang_data.$b.resolve({
            'onError': ($) => {
                pl.cc($.message, ($) => {
                    switch ($[0]) {
                        case 'no such entry':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`no such entry: ${$.key}`)

                            })
                            break
                        case 'not the right state':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`not the right state: ${$.found}`)

                            })
                            break
                        default: pl.au($[0])
                    }
                })
            }
        })({
            //'imports': d({}),
            'root': {
                'type libraries': {
                    'annotation': null,
                    'dictionary': pd.d({
                        "xx": d_model
                    })
                }
            }
        })['type libraries'].__unsafeGetEntry("xx"),
        'atom mappings': d({
            "identifier": ['string', null],
            "text": ['string', null],
        })
    }

}