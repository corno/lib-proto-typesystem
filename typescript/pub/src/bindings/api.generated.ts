import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"
import * as g_serialize from "../submodules/serialize"
import * as g_this from "./glossary"

export namespace D {
    
    
}

export namespace A {
    
    export type resolve = <GAnnotations>() => g_resolve.SYNC.A.F.Resolve<GAnnotations>
    
    export type serializeToFileSystem = () => g_this.SYNC.A.P.SerializeToFileSystem
}

export type API = {
    readonly 'resolve': A.resolve
    readonly 'serializeToFileSystem': A.serializeToFileSystem
}