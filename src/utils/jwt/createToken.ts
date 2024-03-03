import jwt from "jsonwebtoken";
import { SECRET_WORD_JWT } from "../../constants/SECRETWORD_JWT";
import { CreateTokenDto } from "../../entities/user/createToken.dto";

export const createJwt = (user: CreateTokenDto) => {
    
  return jwt.sign(user, SECRET_WORD_JWT);
};
