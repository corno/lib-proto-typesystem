import * as pd from 'pareto-core-data'

import * as g_llts from "../../../pub/dist/submodules/unresolved"

import {
    array,
    ns,
    optional,
    string

} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_llts.T.Namespace<pd.SourceLocation> = ns(
    {}, {}, {
        "Foo": array(optional(string()))
    }
)