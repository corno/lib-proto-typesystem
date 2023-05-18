import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as t from "./glossary"

type RawDictionary<T> = { [key: string]: T }

type AnnotatedDictionary<T> = {
    'annotation': pd.SourceLocation,
    'dictionary': pt.Dictionary<T>
}

function dict<T>($: RawDictionary<T>): AnnotatedDictionary<T> {
    return {
        'annotation': pd.getLocationInfo(2),
        'dictionary': pd.d($),
    }
}

export function ns(
    namespaces: RawDictionary<t.T.Local__Namespace.namespaces.dictionary.D<pd.SourceLocation>>,
    typeParameters: RawDictionary<t.T.Type__Parameters.dictionary.D<pd.SourceLocation>>,
    types: RawDictionary<t.T.Type<pd.SourceLocation>>
): t.T.Local__Namespace<pd.SourceLocation> {
    return {
        'namespaces': dict(namespaces),
        'parameters': dict(typeParameters),
        'types': dict(types),
    }
}

export function parentSibling(
    name: string
): t.T.Namespace__2<pd.SourceLocation> {
    return ['parent sibling', {
        'namespace': {
            'annotation': pd.getLocationInfo(1),
            'key': name,
        }
    }]
}

export function local(
    namespaces: RawDictionary<t.T.Local__Namespace.namespaces.dictionary.D<pd.SourceLocation>>,
    typeParameters: RawDictionary<t.T.Type__Parameters.dictionary.D<pd.SourceLocation>>,
    types: RawDictionary<t.T.Type<pd.SourceLocation>>
): t.T.Namespace__2<pd.SourceLocation> {
    return ['local', {
        'namespaces': dict(namespaces),
        'parameters': dict(typeParameters),
        'types': dict(types),
    }]
}

export function valueFunction(
    typeParameters: RawDictionary<t.T.Type__Parameters.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['value function', {
        'declaration': {
            'type parameters': dict(typeParameters),
            'context': context,
            'parameters': dict(parameters),
        },
        'return type': returnType,
    }]
}

export function addressFunction(
    typeParameters: RawDictionary<t.T.Type__Parameters.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['address function', {
        'declaration': {
            'type parameters': dict(typeParameters),
            'context': context,
            'parameters': dict(parameters),
        },
        'return type': returnType,
    }]
}

export function procedure(
    typeParameters: RawDictionary<t.T.Type__Parameters.dictionary.D<pd.SourceLocation>>,
    context: t.T.Type<pd.SourceLocation>,
    parameters: RawDictionary<t.T.Function__Declaration.parameters.dictionary.D<pd.SourceLocation>>,
    returnType: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['procedure', {
        'declaration': {
            'type parameters': dict(typeParameters),
            'context': context,
            'parameters': dict(parameters),
        },
    }]
}

export function null_(
): t.T.Type<pd.SourceLocation> {
    return ['null', null]
}

export function string(
): t.T.Type<pd.SourceLocation> {
    return ['string', null]
}

export function number(
): t.T.Type<pd.SourceLocation> {
    return ['number', null]
}

export function boolean(
): t.T.Type<pd.SourceLocation> {
    return ['boolean', null]
}

export function group(
    properties: RawDictionary<t.T.Type.group.dictionary.D<pd.SourceLocation>>,
): t.T.Type<pd.SourceLocation> {
    return ['group', dict(properties)]
}

export function array(
    type: t.T.Type<pd.SourceLocation>,
): t.T.Type<pd.SourceLocation> {
    return ['array', type]
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
    tail?: t.T.Namespace__Selection__Tail<pd.SourceLocation>,
): t.T.Namespace__Selection__Tail<pd.SourceLocation> {
    return {
        'namespace': {
            'annotation': pd.getLocationInfo(1),
            'key': ns,
        },
        'tail': tail === undefined ? [false]: [true, tail]
    }
}

export function externalTypeReference(
    nsPath: t.T.Namespace__Selection__Tail<pd.SourceLocation>,
    type: string,
): t.T.Type<pd.SourceLocation> {
    return ['type reference', ['external', {
        'namespaces': nsPath,
        'type': {
            'annotation': pd.getLocationInfo(1),
            'key': type
        }
    }]]
}