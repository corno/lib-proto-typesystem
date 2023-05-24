import * as pd from 'pareto-core-data'

import * as g_llts from "../../../pub/dist/submodules/unresolved"

import {
    addressFunction,
    array,
    dictionary,
    externalTypeReference,
    group,
    local,
    ns,
    null_,
    number,
    optional,
    parentSibling,
    prop,
    step,
    string,
    taggedUnion,
    typeParameter,
    typeReference,
} from "../../../pub/dist/submodules/unresolved/shorthands"
import { boolean } from '../../../pub/dist/submodules/unresolved/shorthands'
import { typeArgument } from '../../../pub/dist/submodules/unresolved/shorthands'

export const $: g_llts.T.Local__Namespace<pd.SourceLocation> = ns(
    {
        "_ToBeEscaped": local( //starts with underscore, should be escaped
            {},
            {},
            {}
        ),
        "Aunt": local(
            {},
            {},
            {
                "MyString": string()
            }
        ),
        "My Namespace": local(
            {},
            {
                "Ref to Aunt": parentSibling("Aunt"),
                "Aunt": local(//shadowing parent 'Aunt'
                    {},
                    {},
                    {},
                ),
                "My Subnamespace": local(
                    {
                    },
                    {
                    },
                    {
                    }
                ),
            },
            {
                "TypeRef": externalTypeReference(step("Ref to Aunt"), "MyString")

            }
        ),
        "Namespace With Type Parameter": local(
            {
                "T": null
            },
            {},
            {
                "Dictionary": dictionary(typeParameter("T")),
            }
        )
    },
    {

    },
    {
        "Optional String": optional(string()),
        "String": string(),
        "Array Of Strings": array((string())),
        "Dictionary Of Strings": dictionary((string())),
        "Number": number(),
        "Boolean": boolean(),
        "boolean": boolean(), //should be escaped
        "Null": null_(),
        "Group": group({
            "prop 1": prop(string()),
            "prop 2": prop(number()),
        }),
        "Tagged Union": taggedUnion({
            "option 1": string(),
            "option 2": number(),
        }),
        "Address Function": addressFunction(
            {
                "T": null
            },
            number(),
            {
                "A Parameter": boolean(),
                "A Type Reference": externalTypeReference(step("Namespace With Type Parameter", { "T": typeArgument(typeParameter("T")) }), "Dictionary"),
            },
            string()
        )
    }
)