import * as pd from 'pareto-core-data'

import { constructor, algorithm, procedure, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateTypescript": algorithm(procedure("this", {}, "GenerateTypescript"), {}, dependent(null, {
            "createFile": procedure("fp", {}, "CreateFile"),
            "generateTypescript": procedure("2typescript", {}, "Generate")
        }, {})),
    }),
}