import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type serialize = <GAnnotation>() => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}