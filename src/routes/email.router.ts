import {Router} from "express";
import EmailController from "@controllers/email.controller";
import {validateFormSendEmail} from "@middlewares/validatorForm.middleware";

const emailRouter = Router();

emailRouter.post('/send', validateFormSendEmail, EmailController.sendEmail);

export default emailRouter;