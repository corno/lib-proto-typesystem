import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    resolvedSiblingComponent, dictionary,
    globalType,
    group, t_grp,
    option, optional, prop, taggedUnion,
    t_tu, tempTypeSelection, thisCyclic, aLookup,
    resolvedValueReference, valSel, globalTypeSelection, pNonCyclicLookup, lparameter, terminal, s_group, lookupReference, thisNonCyclic, pCyclicLookup
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d


export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
    }),
    'labels': {
        'atom types': d({
            "identifier": null,
        }),
    },
    'global types': d({
        "Type Parameters": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            },
            dictionary(group({}))
        ),
        "Namespace": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
            },
            group({
                "namespaces": prop(dictionary(taggedUnion({
                    "local": option(resolvedSiblingComponent("Namespace", {})),
                }))),
                "parameters": prop(resolvedSiblingComponent("Type Parameters", {})),
                "types": prop(dictionary(resolvedSiblingComponent("Type", {}))),
            }),
        ),
        "Namespace Selection": globalType(
            {

            },
            group({
                //"namespace": prop(lookupReference(lparameter("namespaces"), tempTypeSelection("Namespace"))),
                "tail": prop(optional(resolvedSiblingComponent("Namespace Selection", {})))
            })
        ),
        "Function Declaration": globalType(
            {},
            group({
                "type parameters": prop(resolvedSiblingComponent("Type Parameters", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "context": prop(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "parameters": prop(dictionary(resolvedSiblingComponent("Type", {}))),
            })
        ),
        "Type": globalType(
            {
                "definitions": pNonCyclicLookup(globalTypeSelection("Definition")),
                "resolved siblings": pNonCyclicLookup(globalTypeSelection("Type")),
                "cyclic siblings": pCyclicLookup(globalTypeSelection("Type")),
            },
            taggedUnion({
                "address function": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                    "return type": prop(resolvedSiblingComponent("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                })),
                "array": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "boolean": option(group({})),
                "dictionary": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "group": option(dictionary(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                }))),
                "null": option(group({})),
                "number": option(group({})),
                "optional": option(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                })),
                "procedure": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                })),
                "string": option(group({})),
                "tagged union": option(dictionary(resolvedSiblingComponent("Type", {
                    "global types": aLookup(lparameter("global types"))
                }))),
                "type reference": option(taggedUnion({
                    "external": option(group({
                        "namespaces": prop(resolvedSiblingComponent("Namespace Selection", {})),
                        //"type": prop(resolvedValueReference(valSel("namespaces", s_group("types")), tempTypeSelection("Type")))
                    })),
                    //     "sibling": option(lookupReference(lparameter("resolved siblings"), tempTypeSelection("Type"))),
                    //     "cyclic sibling": option(lookupReference(lparameter("cyclic siblings"), tempTypeSelection("Type"))),
                })),
                "value function": option(group({
                    "declaration": prop(resolvedSiblingComponent("Function Declaration", {})),
                    "return type": prop(resolvedSiblingComponent("Type", {
                        "global types": aLookup(lparameter("global types"))
                    })),
                })),
            })
        ),
        "Root": globalType(
            {},
            resolvedSiblingComponent("Namespace", {}),
        )
    }),
}