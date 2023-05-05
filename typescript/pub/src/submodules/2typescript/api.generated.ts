import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_typescript from "res-typescript"

export namespace D {
    
    export type generate = {
        readonly 'createApostrophedString': g_typescript.SYNC.A.F.CreateApostrophedString
        readonly 'createIdentifier': g_typescript.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }
}

export namespace A {
    
    export type generate = ($d: D.generate, ) => g_this.SYNC.A.P.Generate
}

export type API = {
    readonly 'generate': A.generate
}