import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as a_this from "../../submodules/serialize"
import * as a_foreach from "res-pareto-foreach"
import * as a_typescript from "res-typescript"
import * as a_collation from "res-pareto-collation"
import * as a_dicitionary from "res-pareto-dictionary"
import * as a_fp from "lib-fountain-pen"


import { A } from "../api.generated"

export const $$: A.serializeToFileSystem = () => {
    return ($) => {
        a_fp.$b.createFile()(
            ($i) => {
                $i($.path, ($i) => {
                    a_this.$a.serialize({
                        'filter': a_dicitionary.$r.filter(),
                        'createApostrophedString': a_typescript.$r.createApostrophedString(),
                        'createIdentifier': a_typescript.$r.createIdentifier(),
                        'dictionaryForEach': a_foreach.$r.dictionaryForEach({
                            'compare': a_collation.$r.localeIsABeforeB()
                        }),
                        'enrichedDictionaryForEach': a_foreach.$r.enrichedDictionaryForEach({
                            'compare': a_collation.$r.localeIsABeforeB()
                        }),
                        'escape': a_typescript.$r.escape(),
                        'isEmpty': a_dicitionary.$r.isEmpty(),
                        'mergeAndIgnore': a_dicitionary.$r.mergeAndIgnore({
                            'error': {
                                'data': ($) => {
                                    pd.logDebugMessage(`MERGE KEY ERROR: ${$}`)
                                },
                                'end': () => {

                                }
                            }
                        }),
                    })($.data, $i)
                })
            },
            {
                'logError': ($) => {

                }
            }
        )
    }
}