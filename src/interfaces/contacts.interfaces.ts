import { z } from "zod";
import { DeepPartial } from "typeorm";
import { contactSchemaRequest, contactSchemaResponse, listContactSchemaResponse } from "../schemas/contacts.schema";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactList = z.infer<typeof listContactSchemaResponse>;
type TContactUpdate = DeepPartial<TContactRequest>

export {
    TContactRequest,
    TContactResponse,
    TContactList,
    TContactUpdate
}
