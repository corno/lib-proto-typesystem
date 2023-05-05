import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"

import * as a_resolve from "../../submodules/resolve"
import * as a_resolveRes from "res-pareto-resolve"

import { A } from "../api.generated"

export const $$: A.resolve = () => {
    return a_resolve.$a.resolve({
        'resolveDictionary': a_resolveRes.$r.safeResolveDictionary({
            'onError': ($) => {
                pd.logDebugMessage($)
            }
        })
    })
}