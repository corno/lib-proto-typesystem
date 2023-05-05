import * as pd from 'pareto-core-data'

import { data, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, ref, sExternalInterfaceReference, sInterface, sInterfaceReference, sfunction, string, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"


import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateTypescriptParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "data": member(ref(externalTypeReference("model", "Root")))
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
        }),

    },
    'synchronous': {
        'interfaces': d({
            "nothing": sInterface(['group', { 'members': pd.d({}) }])
        }),
        'algorithms': d({
            "GenerateTypescript": procedure(data(typeReference("GenerateTypescriptParameters")), sInterfaceReference("nothing")),
        }),

    },

}