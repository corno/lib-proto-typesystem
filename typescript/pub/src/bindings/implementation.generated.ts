import { API } from "./api.generated"
import { $$ as igenerateTypescript } from "./implementations/generateTypescript.b"
import { $$ as iresolve } from "./implementations/resolve.b"

export const $api: API = {
    'generateTypescript': igenerateTypescript,
    'resolve': iresolve,
}