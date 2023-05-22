import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_fp from "lib-fountain-pen"
import * as g_model from "../../resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type Serialize = ($: g_model.T.Root, $i: g_fp.SYNC.I.Block) => void
        }
    }
}