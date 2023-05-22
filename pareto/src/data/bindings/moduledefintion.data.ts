import * as pd from 'pareto-core-data'

import {
    external,
    main,
    submodule,
    tempSubmodule,
    this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

const d = pd.d

export const $: g_project.T.ModuleDefinition<pd.SourceLocation> = {

    'glossary': {
        'root': glossary,
        'imports': d({
            "model": tempSubmodule("resolved"),
            "common": external("glo-pareto-common"),
        }),
    },
    'api': {
        'root': api,
        'imports': d({
            "this": this_(),
            "main": main(),
            "resolve": submodule("resolve"),
            "serialize": submodule("serialize"),
        }),
    },

}