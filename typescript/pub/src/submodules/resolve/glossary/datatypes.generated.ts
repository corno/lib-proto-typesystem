import * as pt from 'pareto-core-types'

import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

export namespace N {}

export namespace T {
    
    export namespace Error {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export namespace message {
            
            export namespace no__such__entry {
                
                export type key<GAnnotation> = string
            }
            
            export type no__such__entry<GAnnotation> = {
                readonly 'key': string
            }
            
            export namespace not__the__right__state {
                
                export type expected<GAnnotation> = string
                
                export type found<GAnnotation> = string
            }
            
            export type not__the__right__state<GAnnotation> = {
                readonly 'expected': string
                readonly 'found': string
            }
        }
        
        export type message<GAnnotation> = 
            | ['no such entry', {
                readonly 'key': string
            }]
            | ['not the right state', {
                readonly 'expected': string
                readonly 'found': string
            }]
    }
    
    export type Error<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'message': 
            | ['no such entry', {
                readonly 'key': string
            }]
            | ['not the right state', {
                readonly 'expected': string
                readonly 'found': string
            }]
    }
}