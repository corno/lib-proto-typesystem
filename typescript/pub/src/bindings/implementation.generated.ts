import { API } from "./api.generated"
import { $$ as iresolve } from "./implementations/resolve.b"
import { $$ as iserializeToFileSystem } from "./implementations/serializeToFileSystem.b"

export const $api: API = {
    'resolve': iresolve,
    'serializeToFileSystem': iserializeToFileSystem,
}