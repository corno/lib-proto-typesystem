import { API } from "./api.generated"
import { $$ as igenerate } from "./implementations/generate.s.p"

export const $api: API = {
    'generate': igenerate,
}