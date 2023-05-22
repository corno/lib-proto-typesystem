import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), { }, dependent(null, {
            //"resolveDictionary": sfunction("resolve", {}, "SafeResolveDictionary")
            "escape": sfunction("typescript", {}, "Escape"),
            "createIdentifier": sfunction("typescript", {}, "CreateIdentifier"),
            "createApostrophedString": sfunction("typescript", {}, "CreateApostrophedString"),
            "enrichedDictionaryForEach": procedure("foreach", {}, "EnrichedDictionaryForEach"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
            "filter": sfunction("dictionary", {}, "Filter"),
            "isEmpty": sfunction("dictionary", {}, "IsEmpty"),
            "mergeAndIgnore": sfunction("dictionary", {}, "MergeAndIgnore"),

        }, {}))
    }),
}