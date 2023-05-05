import * as pt from 'pareto-core-types'

import * as g_2typescript from "../submodules/2typescript"
import * as g_fp from "lib-fountain-pen"
import * as g_this from "./glossary"

export namespace D {
    
    export type generateTypescript = {
        readonly 'createFile': g_fp.SYNC.A.P.CreateFile
        readonly 'generateTypescript': g_2typescript.SYNC.A.P.Generate
    }
}

export namespace A {
    
    export type generateTypescript = ($d: D.generateTypescript, ) => g_this.SYNC.A.P.GenerateTypescript
}

export type API = {
    readonly 'generateTypescript': A.generateTypescript
}