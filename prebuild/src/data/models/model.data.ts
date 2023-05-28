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
        "Imports": globalType(
            dictionary(component(typeRef("Import", true)))
        ),
        "Nested Namespace": globalType(
            group({
                "imports": prop(component(typeRef("Imports"))),
                "namespace": prop(component(typeRef("Namespace", true))),
            })
        ),
        "Import": globalType(
            stateGroup({
                "sibling": state(lookupReference(typeRef("Nested Namespace"))),
                "parent import": state(dictionaryReference(typeSelection("Imports"))),
            })
        ),
        "Namespace": globalType(
            group({
                "namespaces": prop(dictionary(component(typeRef("Nested Namespace")))),
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
                "group": state(dictionary(group({
                    "type": prop(component(typeRef("Type", true))),
                    "mutable": prop(optional(group({}))),
                }))),
                "lookup": state(component(typeRef("Type", true))),
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
                        "namespace path": prop(component(typeRef("Namespace Selection", true))),
                        "type": prop(dictionaryReference(typeSelection("Namespace", t_grp("types")))),

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
        "Namespace Selection Tail": globalType(
            group({
                "namespace": prop(dictionaryReference(typeSelection("Namespace", t_grp("namespaces")))),
                "arguments": prop(component(typeRef("Type Arguments"))),
                "tail": prop(optional(component(typeRef("Namespace Selection Tail", true))))
            })
        ),
        "Namespace Selection": globalType(
            group({
                "start": prop(stateGroup({
                    "import": state(group({
                        "namespace": prop(dictionaryReference(typeSelection("Imports"))),
                        "arguments": prop(component(typeRef("Type Arguments"))),
                        "tail": prop(optional(component(typeRef("Namespace Selection Tail"))))
                    })),
                    "local": state(group({
                        "namespace": prop(component(typeRef("Namespace Selection Tail"))),
                    })),
                })),
            })
        ),
        // "Namespace Selection": globalType(
        //     group({
        //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
        //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
        //     })
        // ),
        "Root": globalType(
            component(typeRef("Namespace")),
        )
    }
)