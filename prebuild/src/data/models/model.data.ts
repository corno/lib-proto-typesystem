import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalType,
    group,
    state,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    cyclicReference,
    lookupReference,
    dictionaryReference,
    typeLibrary,
    constraint,
    dictionaryConstraint,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {
    },
    {
        "identifier": null,
    },
    {
        "Aggregated Type Parameters": globalType(dictionary(group({}))),
        "Type Parameters": globalType(
            group({
                "local": prop(dictionary(group({}))),
                "aggregated": prop(component(typeRef("Aggregated Type Parameters")))
            })
        ),
        "Function Declaration": globalType(
            group({
                "type parameters": prop(component(typeRef("Type Parameters"))),
                "context": prop(component(typeRef("Type", true))),
                "parameters": prop(dictionary(component(typeRef("Type", true)))),
            })
        ),
        "Namespace 2": globalType(
            stateGroup({
                "parent sibling": state(group({
                    "namespace": prop(lookupReference(typeRef("Namespace 2", true))),
                })),
                "local": state(component(typeRef("Local Namespace", true))),
            })
        ),
        "Local Namespace": globalType(
            group({
                "namespaces": prop(dictionary(component(typeRef("Namespace 2")))),
                "parameters": prop(component(typeRef("Type Parameters"))),
                "types": prop(dictionary(component(typeRef("Type", true)))),
            }),
        ),
        "Type": globalType(
            stateGroup({
                "address function": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"))),
                    "return type": prop(component(typeRef("Type", true))),
                })),
                "array": state(component(typeRef("Type", true))),
                "boolean": state(group({})),
                "computed": state(component(typeRef("Type", true))),
                "dictionary": state(component(typeRef("Type", true))),
                "group": state(dictionary(component(typeRef("Type", true)))),
                "null": state(group({})),
                "number": state(group({})),
                "optional": state(component(typeRef("Type", true))),
                "procedure": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"))),
                })),
                "string": state(group({})),
                "tagged union": state(dictionary(component(typeRef("Type", true)))),
                "type parameter": state(dictionaryReference(typeSelection("Aggregated Type Parameters"))),
                "type reference": state(stateGroup({
                    "external": state(group({
                        "namespaces": prop(component(typeRef("Namespace Selection", true))),
                        "type": prop(dictionaryReference(typeSelection("Local Namespace", t_grp("types")))),

                    })),
                    "sibling": state(lookupReference(typeRef("Type", true))),
                    "cyclic sibling": state(cyclicReference(typeRef("Type", true))),
                })),
                "value function": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"))),
                    "return type": prop(component(typeRef("Type", true))),
                })),
            })
        ),
        "Type Arguments": globalType(constrainedDictionary(
            {
                "parameter": dictionaryConstraint(typeSelection("Type Parameters", t_grp("local")), true),
            },
            group({
                //link to parameter
                "type": prop(component(typeRef("Type", true))),
            }))),
        "Namespace Selection": globalType(
            group({
                "namespace": prop(dictionaryReference(typeSelection("Local Namespace", t_grp("namespaces")))),
                "arguments": prop(component(typeRef("Type Arguments"))),
                "tail": prop(optional(component(typeRef("Namespace Selection", true))))
            })
        ),
        // "Namespace Selection": globalType(
        //     group({
        //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
        //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
        //     })
        // ),
        "Root": globalType(
            component(typeRef("Local Namespace")),
        )
    }
)