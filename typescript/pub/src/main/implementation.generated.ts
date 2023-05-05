import { API } from "./api.generated"
import { $$ as igenerateTypescript } from "./implementations/generateTypescript.s.p"

export const $api: API = {
    'generateTypescript': igenerateTypescript,
}