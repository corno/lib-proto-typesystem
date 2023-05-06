import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as api } from "./main/api.data"
import { $ as glossary } from "./main/glossary.data"
import { $ as d_bindings } from "./bindings/moduledefintion.data"
import { $ as d_resolved } from "./submodules/resolved/module.data"
import { $ as d_unresolved } from "./submodules/unresolved/module.data"
import { $ as d_possiblyresolved } from "./submodules/possiblyresolved/module.data"
import { $ as d_resolve } from "./submodules/resolve/module.data"
import { $ as d_serialize } from "./submodules/serialize/module.data"

import { external, submodule, tempSubmodule, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the typesystem for the imperative Proto language",
    'license': "TBD",

    'dependencies': d({
        "res-pareto-resolve": null,
        "lib-fountain-pen": null,
    }),
    'type': ['library', {
        'main': {
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                    }),
                },
                'api': {
                    'root': api,
                    'imports': d({
                        "this": this_(),
                    }),
                },
            },
            'implementation': ['typescript', null],
        },
        'submodules': d({
            "unresolved": d_unresolved,
            "resolved": d_resolved,
            "resolve": d_resolve,
            "serialize": d_serialize,
            "possiblyresolved": d_possiblyresolved,
        }),
        'bindings': [true, {
            'definition': d_bindings,
            'implementation': ['typescript', null],
        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),

                        },

                    },
                    'imports': d({}),
                },
                'api': {
                    'imports': d({}),
                    'root': {
                        'algorithms': d({}),
                    },
                }

            },
            'imports': d({}),
        }
    }],
}