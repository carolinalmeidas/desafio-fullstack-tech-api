import { z } from "zod";
import { userSchemaRequest, userSchemaResponse } from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUserUpdate = DeepPartial<TUserRequest>

export {
    TUserRequest,
    TUserResponse,
    TUserUpdate
}
