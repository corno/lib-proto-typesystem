import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"

export namespace D {
    
    
}

export namespace A {
    
    export type generateTypescript = () => g_main.SYNC.A.P.GenerateTypescript
    
    export type resolve = <GAnnotations>() => g_resolve.SYNC.A.F.Resolve<GAnnotations>
}

export type API = {
    readonly 'generateTypescript': A.generateTypescript
    readonly 'resolve': A.resolve
}