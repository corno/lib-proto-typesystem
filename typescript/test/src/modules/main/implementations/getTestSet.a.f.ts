import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-data'

import * as g_pub from "../../../../../pub"

import { $ as d_data } from "../../../data/simple.data"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {

    const res = g_pub.$b.resolve()(d_data)

    g_pub.$b.serializeToFileSystem()(
        {
            'data': res,
            'path': pd.a([$.testDirectory, "typesystem.ts"])
        },
        null,
    )

    return pa.asyncValue({
        elements: pm.wrapRawDictionary({})
    })
}