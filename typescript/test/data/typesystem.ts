
import * as _pt from 'pareto-core-types'

namespace _ {
    
    export type Address<T> = { get: () => T, set: ($: T) => void } 
}
import _p0_Aunt = Aunt

export namespace $_$ToBeEscaped {}

export namespace Aunt {
    
    export type MyString = string
}

export namespace My__Namespace {
    
    import Ref__to__Aunt = _p0_Aunt
    
    export namespace Aunt {}
    
    export namespace My__Subnamespace {}
    
    export type TypeRef = Ref__to__Aunt.MyString
}

export namespace Namespace__With__Type__Parameter {
    
    export type Dictionary<_TT> = _pt.Dictionary<_TT>
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
        readonly 'A Type Reference': Namespace__With__Type__Parameter.Dictionary<
            _TT
        >
    }
) => _.Address<string>