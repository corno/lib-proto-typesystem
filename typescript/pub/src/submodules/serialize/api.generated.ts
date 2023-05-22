import * as pt from 'pareto-core-types'

import * as g_dictionary from "res-pareto-dictionary"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_typescript from "res-typescript"

export namespace D {
    
    export type serialize = {
        readonly 'createApostrophedString': g_typescript.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_typescript.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
        readonly 'escape': g_typescript.SYNC.A.F.Escape
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'isEmpty': g_dictionary.SYNC.A.F.IsEmpty
        readonly 'mergeAndIgnore': g_dictionary.SYNC.A.F.MergeAndIgnore
    }
}

export namespace A {
    
    export type serialize = ($d: D.serialize, ) => g_this.SYNC.A.P.Serialize
}

export type API = {
    readonly 'serialize': A.serialize
}