import { z } from "zod"

const contactSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    phone: z.string().max(11),
    createdAt: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true,

});

const contactSchemaResponse = contactSchema
const listContactSchemaResponse = z.array(contactSchema);
const updateContactSchema = contactSchema.partial()
export {
  contactSchemaResponse,
  contactSchemaRequest,
  listContactSchemaResponse,
  updateContactSchema
}