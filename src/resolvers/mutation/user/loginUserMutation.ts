import { GraphQLError } from "graphql";
import { LoginUser } from "../../../entities/user/createLogin.dto";
import { loginService } from "../../../services/users/loginUser.service";

export const loginUser = async (_root: any, args: LoginUser) => {
  try {
    const { email, password } = args;
    const token = await loginService(email, password);
    console.log(token);
    return token;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
