import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as t from "./glossary"

type RawDictionary<T> = { [key: string]: T }

type AnnotatedDictionary<T> = {
    'annotation': pd.SourceLocation,
    'dictionary': pt.Dictionary<T>
}

function ref($: string) {
    return {
        'annotation': pd.getLocationInfo(2),
        'key': $,
    }
}

function dict<T>($: RawDictionary<T>): AnnotatedDictionary<T> {
    return {
        'annotation': pd.getLocationInfo(2),
        'dictionary': pd.d($),
    }
}

export function namespace(
    imports: RawDictionary<t.T.Imports.dictionary.D<pd.SourceLocation>>,
    typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
    namespaces: RawDictionary<t.T.Namespace.namespaces.dictionary.D<pd.SourceLocation>>,
    types: RawDictionary<t.T.Type<pd.SourceLocation>>
): t.T.Nested__Namespace<pd.SourceLocation> {
    return {
        'imports': dict(imports),
        'namespace': {
            'namespaces': dict(namespaces),
            'parameters': {
                'local': dict(typeParameters),
                'aggregated': dict({}),
            },
            'types': dict(types),
        }
    }
}

export function root(
    typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
    namespaces: RawDictionary<t.T.Namespace.namespaces.dictionary.D<pd.SourceLocation>>,
    types: RawDictionary<t.T.Type<pd.SourceLocation>>
): t.T.Namespace<pd.SourceLocation> {
    return {
        'namespaces': dict(namespaces),
        'parameters': {
            'local': dict(typeParameters),
            'aggregated': dict({}),
        },
        'types': dict(types),
    }
}

export function sibling(
    name: string
): t.T.Import<pd.SourceLocation> {
    return ['sibling', ref(name)]
}

// export function local(
//     typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
//     namespaces: RawDictionary<t.T.Local__Namespace.namespaces.dictionary.D<pd.SourceLocation>>,
//     types: RawDictionary<t.T.Type<pd.SourceLocation>>
// ): t.T.Namespace__2<pd.SourceLocation> {
//     return ['local', {
//         'parameters': {
//             'local': dict(typeParameters),
//             'aggregated': dict({})
//         },
//         'namespaces': dict(namespaces),
//         'types': dict(types),
//     }]
// }

export function initializationFunction(
    typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['initialization function', {
        'declaration': {
            'type parameters': {
                'local': dict(typeParameters),
                'aggregated': dict({})
            },
            'context': context,
            'parameters': dict(parameters),
        },
        'return type': returnType,
    }]
}

export function selectionFunction(
    typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['selection function', {
        'declaration': {
            'type parameters': {
                'local': dict(typeParameters),
                'aggregated': dict({})
            },
            'context': context,
            'parameters': dict(parameters),
        },
        'return type': returnType,
    }]
}

export function procedure(
    typeParameters: RawDictionary<t.T.Type__Parameters.local.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['procedure', {
        'declaration': {
            'type parameters': {
                'local': dict(typeParameters),
                'aggregated': dict({})
            },
            'context': context,
            'parameters': dict(parameters),
        },
    }]
}

export function null_(
): t.T.Type<pd.SourceLocation> {
    return ['atom', ['null', null]]
}

export function string(
): t.T.Type<pd.SourceLocation> {
    return ['atom', ['string', null]]
}

export function number(
): t.T.Type<pd.SourceLocation> {
    return ['atom', ['number', null]]
}

export function boolean(
): t.T.Type<pd.SourceLocation> {
    return ['atom', ['boolean', null]]
}

export function group(
    properties: RawDictionary<t.T.Type.group.dictionary.D<pd.SourceLocation>>,
): t.T.Type<pd.SourceLocation> {
    return ['group', dict(properties)]
}

export function prop(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type.group.dictionary.D<pd.SourceLocation> {
    return {
        'type': type,
        'mutable': [false]
    }
}

export function propMutable(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type.group.dictionary.D<pd.SourceLocation> {
    return {
        'type': type,
        'mutable': [true, null]
    }
}

export function taggedUnion(
    options: RawDictionary<t.T.Type.tagged__union.dictionary.D<pd.SourceLocation>>,
): t.T.Type<pd.SourceLocation> {
    return ['tagged union', dict(options)]
}

export function array(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['array', type]
}

export function computed(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['computed', type]
}

export function optional(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['optional', type]
}

export function dictionary(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['dictionary', type]
}

export function step(
    ns: string,
    args?: RawDictionary<t.T.Type__Arguments.dictionary.D<pd.SourceLocation>>,
    tail?: t.T.Namespace__Selection__Tail<pd.SourceLocation>,
): t.T.Namespace__Selection__Tail<pd.SourceLocation> {
    return {
        'namespace': {
            'annotation': pd.getLocationInfo(1),
            'key': ns,
        },
        'arguments': dict(args === undefined ? {} : args),
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function imprt(
    ns: string,
    args?: RawDictionary<t.T.Type__Arguments.dictionary.D<pd.SourceLocation>>,
    tail?: t.T.Namespace__Selection__Tail<pd.SourceLocation>,
): t.T.Namespace__Selection<pd.SourceLocation> {
    return {
        'start': ['import', {
            'namespace': {
                'annotation': pd.getLocationInfo(1),
                'key': ns,
            },
            'arguments': dict(args === undefined ? {} : args),
            'tail': tail === undefined ? [false] : [true, tail]

        }]
    }
}
export function local(
    ns: t.T.Namespace__Selection__Tail<pd.SourceLocation>,
): t.T.Namespace__Selection<pd.SourceLocation> {
    return {
        'start': ['local', {
            'namespace': ns

        }]
    }
}

export function typeArgument(
    type: t.T.Type<pd.SourceLocation>
): t.T.Type__Arguments.dictionary.D<pd.SourceLocation> {
    return {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'type': type
        }
    }
}

export function externalTypeReference(
    nsPath: t.T.Namespace__Selection<pd.SourceLocation>,
    type: string,

): t.T.Type<pd.SourceLocation> {
    return ['type reference', ['external', {
        'namespace path': nsPath,
        'type': {
            'annotation': pd.getLocationInfo(1),
            'key': type
        },
    }]]
}

export function typeParameter(
    typeParameter: string
): t.T.Type<pd.SourceLocation> {
    return ['type parameter', {
        'annotation': pd.getLocationInfo(1),
        'key': typeParameter
    }]
}

export function typeReference(
    type: string,
    cyclic?: boolean,
): t.T.Type<pd.SourceLocation> {
    if (cyclic) {
        return ['type reference', ['cyclic sibling', {
            'annotation': pd.getLocationInfo(1),
            'key': type
        }]]
    } else {
        return ['type reference', ['sibling', {
            'annotation': pd.getLocationInfo(1),
            'key': type
        }]]
    }
}