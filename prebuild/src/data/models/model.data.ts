import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data/dist/submodules/unresolved"

import {
    array, constrainedDictionary,
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
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
    pLookup,
    pCyclicLookup,
    pResolvedValue,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"

export const $: g_pareto_lang_data.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {
    },
    {
        "identifier": null,
    },
    {
        "Aggregated Type Parameters": globalTypeDeclaration({}),
        "Function Declaration": globalTypeDeclaration({
            "resolved namespaces": pLookup("Nested Namespace"),
            "resolved sibling types": pLookup("Type"),
            "cyclic sibling types": pCyclicLookup("Type"),
            "type parameters": pResolvedValue("Aggregated Type Parameters"),
        }),
        "Import": globalTypeDeclaration({}),
        "Imports": globalTypeDeclaration({}),
        "Namespace": globalTypeDeclaration({
            "resolved sibling namespaces": pLookup("Nested Namespace", true),
            "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
        }),
        "Nested Namespace": globalTypeDeclaration({
            "resolved parent sibling namespaces": pLookup("Nested Namespace", true),
        }, "Namespace"),
        "Namespace Selection": globalTypeDeclaration({
            "resolved namespaces": pLookup("Nested Namespace"),
            "resolved sibling types": pLookup("Type"),
            "cyclic sibling types": pCyclicLookup("Type"),
            "type parameters": pResolvedValue("Aggregated Type Parameters"),
        }, "Nested Namespace"),
        "Namespace Selection Tail": globalTypeDeclaration({}),
        "Root": globalTypeDeclaration({}),
        "Type Arguments": globalTypeDeclaration({}),
        "Type Parameters": globalTypeDeclaration({
            "parent type parameters": pResolvedValue("Aggregated Type Parameters", true),
        }),
        "Type": globalTypeDeclaration({
            "resolved namespaces": pLookup("Nested Namespace"),
            "resolved sibling types": pLookup("Type"),
            "cyclic sibling types": pCyclicLookup("Type"),
            "type parameters": pResolvedValue("Aggregated Type Parameters"),
        }),
    },
    {
        "Aggregated Type Parameters": globalTypeDefinition(dictionary(group({}))),
        "Type Parameters": globalTypeDefinition(
            group({
                "local": prop(dictionary(group({}))),
                "aggregated": prop(component(typeRef("Aggregated Type Parameters"), {}))
            })
        ),
        "Function Declaration": globalTypeDefinition(
            group({
                "type parameters": prop(component(typeRef("Type Parameters"), {
                    "parent type parameters": null,
                })),
                "context": prop(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "parameters": prop(dictionary(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                }))),
            })
        ),
        "Imports": globalTypeDefinition(
            dictionary(component(typeRef("Import", true), {}))
        ),
        "Nested Namespace": globalTypeDefinition(
            group({
                "imports": prop(component(typeRef("Imports"), {})),
                "namespace": prop(component(typeRef("Namespace", true), {
                    "resolved sibling namespaces": null,
                    "parent type parameters": null,
                })),
            })
        ),
        "Import": globalTypeDefinition(
            stateGroup({
                "sibling": state(lookupReference(typeRef("Nested Namespace"))),
                "parent import": state(dictionaryReference(typeSelection("Imports"))),
            })
        ),
        "Namespace": globalTypeDefinition(
            group({
                "namespaces": prop(dictionary(component(typeRef("Nested Namespace"), {
                    "resolved parent sibling namespaces": null,
                }))),
                "parameters": prop(component(typeRef("Type Parameters"), {
                    "parent type parameters": null,
                })),
                "types": prop(dictionary(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                }))),
            }),
        ),
        "Type": globalTypeDefinition(
            stateGroup({
                "array": state(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "boolean": state(group({})),
                "computed": state(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "dictionary": state(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "group": state(dictionary(group({
                    "type": prop(component(typeRef("Type", true), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                    "mutable": prop(optional(group({}))),
                }))),
                "initialization function": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                    "return type": prop(component(typeRef("Type", true), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                })),
                "lookup": state(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "null": state(group({})),
                "number": state(group({})),
                "optional": state(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
                "procedure": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                })),
                "selection function": state(group({
                    "declaration": prop(component(typeRef("Function Declaration"), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                    "return type": prop(component(typeRef("Type", true), {
                        "resolved namespaces": null,
                        "resolved sibling types": null,
                        "cyclic sibling types": null,
                        "type parameters": null,
                    })),
                })),
                "string": state(group({})),
                "tagged union": state(dictionary(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                }))),
                "type parameter": state(dictionaryReference(typeSelection("Aggregated Type Parameters"))),
                "type reference": state(stateGroup({
                    "external": state(group({
                        "namespace path": prop(component(typeRef("Namespace Selection", true), {
                            "resolved namespaces": null,
                            "resolved sibling types": null,
                            "cyclic sibling types": null,
                            "type parameters": null,
                        })),
                        "type": prop(dictionaryReference(typeSelection("Namespace", t_grp("types")))),

                    })),
                    "sibling": state(lookupReference(typeRef("Type", true))),
                    "cyclic sibling": state(cyclicReference(typeRef("Type", true))),
                })),
            })
        ),
        "Type Arguments": globalTypeDefinition(constrainedDictionary(
            {
                "parameter": dictionaryConstraint(typeSelection("Type Parameters", t_grp("local")), true),
            },
            group({
                //link to parameter
                "type": prop(component(typeRef("Type", true), {
                    "resolved namespaces": null,
                    "resolved sibling types": null,
                    "cyclic sibling types": null,
                    "type parameters": null,
                })),
            }))),
        "Namespace Selection Tail": globalTypeDefinition(
            group({
                "namespace": prop(dictionaryReference(typeSelection("Namespace", t_grp("namespaces")))),
                "arguments": prop(component(typeRef("Type Arguments"), {})),
                "tail": prop(optional(component(typeRef("Namespace Selection Tail", true), {})))
            })
        ),
        "Namespace Selection": globalTypeDefinition(
            group({
                "start": prop(stateGroup({
                    "import": state(group({
                        "namespace": prop(dictionaryReference(typeSelection("Imports"))),
                        "arguments": prop(component(typeRef("Type Arguments"), {})),
                        "tail": prop(optional(component(typeRef("Namespace Selection Tail"), {})))
                    })),
                    "local": state(group({
                        "namespace": prop(component(typeRef("Namespace Selection Tail"), {})),
                    })),
                })),
            })
        ),
        // "Namespace Selection": globalTypeDefinition(
        //     group({
        //         "namespace": prop(resolvedReference(lookup(typeRef("Local Namespace")))),
        //         "tail": prop(optional(component(typeRef("Namespace Selection"))))
        //     })
        // ),
        "Root": globalTypeDefinition(
            component(typeRef("Namespace"), {
                "resolved sibling namespaces": null,
                "parent type parameters": null,
            }),
        )
    }
)