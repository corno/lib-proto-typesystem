import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../submodules/resolved"

export namespace N {}

export namespace T {
    
    export namespace GenerateTypescriptParameters {
        
        export type data = g_model.T.Root
        
        export type path = g_common.T.Path
    }
    
    export type GenerateTypescriptParameters = {
        readonly 'data': g_model.T.Root
        readonly 'path': g_common.T.Path
    }
}