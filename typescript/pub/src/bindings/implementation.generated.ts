import { API } from "./api.generated"
import { $$ as iresolve } from "./implementations/resolve.b"

export const $api: API = {
    'resolve': iresolve,
}