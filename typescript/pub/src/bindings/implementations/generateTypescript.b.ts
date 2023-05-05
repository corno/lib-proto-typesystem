import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"

import * as a_2typescript from "../../submodules/2typescript"
import * as a_fp from "lib-fountain-pen"
import * as a_main from "../../main"
import * as a_typescript from "res-typescript"
import * as a_foreach from "res-pareto-foreach"
import * as a_collation from "res-pareto-collation"

import { A } from "../api.generated"

export const $$: A.generateTypescript = () => {
    return a_main.$a.generateTypescript({
        'createFile': a_fp.$b.createFile(),
        'generateTypescript': a_2typescript.$a.generate({
            'createApostrophedString': a_typescript.$r.createApostrophedString(),
            'createIdentifier': a_typescript.$r.createIdentifier(),
            'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                'compare': a_collation.$r.localeIsABeforeB()
            }),
            'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                'compare': a_collation.$r.localeIsABeforeB()
            }),
        })
    })
}