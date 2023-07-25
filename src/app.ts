import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";
import { handleErros } from "./error";
import { contactRoutes } from "./routes/contact.routes";


const app: Application = express();

app.use(express.json());
app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactRoutes)
app.use(handleErros)
export default app;