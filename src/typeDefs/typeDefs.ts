import { typePhone, typeUser } from "./entities";
import { allMutations } from "./mutations/typeMutation";
import { allQuerys } from "./queries/typeQuery";

export const typeDefs: string =
  typePhone + typeUser + allQuerys + allMutations;
