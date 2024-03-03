import { createPhone } from "./phone/createPhone";
import { deletePhone } from "./phone/deletePhone";
import { updatePhone} from "./phone/updatePhone";
import { createUser } from "./user/createUser";
import { updateUser } from "./user/updateUser";
import { deleteUser } from "./user/deleteUser";
import { createWebhook } from "./webhook/createWebhook";
import { createEvent } from "./webhook/createEvent";
import { createWebhookEvent } from "./webhook/createWebhookEvent";
import  { loginUser } from "./user/loginUser";
export const allMutations : string = `
type Mutation {
    ${createPhone}
    ${updatePhone}
    ${deletePhone}
    ${createUser}
    ${updateUser}
    ${deleteUser}
    ${createWebhook}
    ${createEvent}
    ${createWebhookEvent}
    ${loginUser}
}
`
