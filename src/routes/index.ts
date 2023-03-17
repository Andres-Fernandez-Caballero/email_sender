import {Router} from "express";
import WebController from "@controllers/web.controller";
import EmailRouter from "@routes/email.router";
const webRouter = Router();

webRouter.get('/', WebController.index)
webRouter.use('/email', EmailRouter)

webRouter.get('/*', WebController.notFound)

export default webRouter;