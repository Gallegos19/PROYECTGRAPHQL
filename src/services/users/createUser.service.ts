import * as UsersRepository from "../../repositories/usersRepository";
import { CreateUser } from "../../entities/user/createUser.dto";
import { createPasswordHash } from "../../utils/bcrypt/createPasswordHash.util";
import { createJwt } from "../../utils/jwt/createToken";
export const createUserservice = async (
    email: string,
    password: string
): Promise<CreateUser> => {
  try {
    const user= await UsersRepository.getUserByEmail(email);
    console.log(user);
    if (!user) {
      const passwordHash = createPasswordHash(password)
    await UsersRepository.createUser(email, passwordHash);
    

    return {
      email,
      password,
    };
  }
  throw new Error("El usuario ya existe")
  } catch (err: any) {
    throw new Error(err);
  }
};
