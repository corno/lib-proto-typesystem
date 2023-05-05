import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_resolved from "../../possiblyresolved"
import * as g_unresolved from "../../unresolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_unresolved.T.Root<GAnnotation>) => g_resolved.T.Root<GAnnotation>
        }
    }
}