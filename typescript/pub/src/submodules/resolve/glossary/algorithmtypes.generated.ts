import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnError<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_in.T.Root<GAnnotation>) => g_out.T.Root
        }
    }
}