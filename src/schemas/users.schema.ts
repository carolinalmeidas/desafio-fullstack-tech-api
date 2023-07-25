import { z } from "zod"

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    password: z.string(),
    phone: z.string().max(11),
    createdAt: z.string(),
})

const userSchemaRequest = userSchema.omit({
    id: true,
    createdAt: true,
});
  
const userSchemaResponse = userSchema.omit({
    password: true,
  });

const updateUserSchema = userSchemaRequest.partial()



  export {
    userSchema,
    userSchemaResponse,
    userSchemaRequest,
    updateUserSchema
  }