import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generate": algorithm(procedure("this", {}, "Generate"), {}, dependent(null, {
            //"resolveDictionary": sfunction("resolve", {}, "SafeResolveDictionary")
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "createIdentifier": sfunction("typescript", {}, "CreateIdentifier"),
            "createApostrophedString": sfunction("typescript", {}, "CreateApostrophedString"),
        }, {}))
    }),
}