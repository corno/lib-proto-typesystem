
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}

export namespace $_$ToBeEscaped {}

export namespace Aunt {
    
    export type MyString = string
}

import _IMy__Namespace_Aunt = Aunt

export namespace My__Namespace {
    
    import _IAunt = _IMy__Namespace_Aunt
    
    export namespace Aunt {
        
        
        export type MyNumber = number
    }
    
    export namespace My__Subnamespace {
        
        
        export namespace My__Subsubnamespace {
            
            
            export type MyBoolean = boolean
        }
    }
    
    export type TypeRef = _IAunt.MyString
    
    export type TypeRef2 = Aunt.MyNumber
    
    export type TypeRef3 = My__Subnamespace.My__Subsubnamespace.MyBoolean
}

export namespace Namespace__With__Type__Parameter {
    
    export type Dictionary<_TT> = _pt.Dictionary<_TT>
}

export namespace Namespace__With__Type__Parameter__2 {
    
    export namespace Namespace__With__Type__Parameter__3 {
        
        export type Dictionary__2<_TT2, _TT3> = _pt.Dictionary<_TT2>
        
        export type Dictionary__3<_TT2, _TT3> = _pt.Dictionary<_TT3>
    }
    
    export type A__Type__Reference<_TT2> = Namespace__With__Type__Parameter__3.Dictionary__3<_TT2, _TT2>
}

export type Optional__String = _pt.OptionalValue<string>

export type String = string

export type Array__Of__Strings = _pt.Array<string>

export type Dictionary__Of__Strings = _pt.Dictionary<string>

export type Number = number

export type Boolean = boolean

export type _lboolean = boolean

export type Null = null

export type Group = {
    readonly 'prop 1': string
    readonly 'prop 2': number
}

export type Tagged__Union = 
    | ['option 1', string]
    | ['option 2', number]

export type Address__Function = <_TT>(
    $: number,
    $p: {
        readonly 'A Parameter': boolean
        readonly 'A Type Reference': Namespace__With__Type__Parameter.Dictionary<_TT>
    }
) => string