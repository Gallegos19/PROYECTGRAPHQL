import { createPhone } from "./phone/createPhone";
import { deletePhone } from "./phone/deletePhone";
import { updatePhone} from "./phone/updatePhone";
import { createUser } from "./user/createUser";
import { updateUser } from "./user/updateUser";
import { deleteUser } from "./user/deleteUser";
export const allMutations : string = `
type Mutation {
    ${createPhone}
    ${updatePhone}
    ${deletePhone}
    ${createUser}
    ${updateUser}
    ${deleteUser}

}
`
