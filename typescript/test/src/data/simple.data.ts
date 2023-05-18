import * as pd from 'pareto-core-data'

import * as g_llts from "../../../pub/dist/submodules/unresolved"

import {
    array,
    externalTypeReference,
    local,
    ns,
    optional,
    parentSibling,
    step,
    string

} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_llts.T.Local__Namespace<pd.SourceLocation> = ns(
    {
        "Aunt": local(
            {},
            {},
            {
                "MyString": string()
            }
        ),
        "My Namespace": local(
            {
                "Ref to Aunt": parentSibling("Aunt"),
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

            },
            {
                "TypeRef": externalTypeReference(step("Ref to Aunt"), "MyString")

            }
        ),
    },
    {

    },
    {
        "Foo": array(optional(string()))
    }
)