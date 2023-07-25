import { z } from "zod"
import { loginRequestSchema, loginResponseSchema } from "../schemas/login.schema"

type TLoginRequest = z.infer< typeof loginRequestSchema>
type TLoginResponse = z.infer< typeof loginResponseSchema>

export { TLoginRequest, TLoginResponse }