import * as pd from 'pareto-core-data'

import * as g_llts from "../../../pub/dist/submodules/unresolved"

import {
    addressFunction,
    array,
    dictionary,
    externalTypeReference,
    group,
    imprt,
    local,
    namespace,
    null_,
    number,
    optional,
    //parentSibling,
    prop,
    root,
    sibling,
    step,
    string,
    taggedUnion,
    typeParameter,
    typeReference,
} from "../../../pub/dist/submodules/unresolved/shorthands"
import { boolean } from '../../../pub/dist/submodules/unresolved/shorthands'
import { typeArgument } from '../../../pub/dist/submodules/unresolved/shorthands'

export const $: g_llts.T.Namespace<pd.SourceLocation> = root(
    {},
    {
        "_ToBeEscaped": namespace( //starts with underscore, should be escaped
            {},
            {},
            {},
            {}
        ),
        "Aunt": namespace(
            {},
            {},
            {},
            {
                "MyString": string()
            }
        ),
        "My Namespace": namespace(
            {
                "Aunt": sibling("Aunt"),
            },
            {},
            {
                //"Ref to Aunt": parentSibling("Aunt"),
                "Aunt": namespace(//shadowing parent 'Aunt' in typescript
                    {},
                    {},
                    {},
                    {
                        "MyNumber": number()

                    },
                ),
                "My Subnamespace": namespace(
                    {},
                    {},
                    {},
                    {}
                ),
            },
            {
                "TypeRef": externalTypeReference(imprt("Aunt"), "MyString"),
                "TypeRef2": externalTypeReference(local(step("Aunt")), "MyNumber"),

            }
        ),
        "Namespace With Type Parameter": namespace(
            {},
            {
                "T": null
            },
            {},
            {
                "Dictionary": dictionary(typeParameter("T")),
            }
        ),
        "Namespace With Type Parameter 2": namespace(
            {},
            {
                "T2": null
            },
            {

                "Namespace With Type Parameter 3": namespace(
                    {},
                    {
                        "T3": null
                    },
                    {},
                    {
                        "Dictionary 2": dictionary(typeParameter("T2")),
                        "Dictionary 3": dictionary(typeParameter("T3")),
                    }
                ),
            },
            {
                "A Type Reference": externalTypeReference(local(step("Namespace With Type Parameter 3", { "T3": typeArgument(typeParameter("T2")) })), "Dictionary 3"),
            }
        ),
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
                "A Type Reference": externalTypeReference(local(step("Namespace With Type Parameter", { "T": typeArgument(typeParameter("T")) })), "Dictionary"),
            },
            string()
        )
    }
)