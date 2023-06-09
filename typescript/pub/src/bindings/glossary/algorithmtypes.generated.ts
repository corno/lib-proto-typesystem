import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_model from "../../submodules/resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type nothing = null
    }
    
    export namespace A {
        
        
        export namespace P {
            export type SerializeToFileSystem = ($: T.SerializeToFileSystemParameters, $i: SYNC.I.nothing) => void
        }
    }
}