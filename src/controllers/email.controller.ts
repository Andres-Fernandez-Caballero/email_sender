
import {Request, Response} from "express";
import {FormSendEmail} from "@interfaces/emailMessage.interface";
import {createMessage, sendEmail} from "@services/senderEmail.service";

const EmailController = {
    sendEmail: async (req: Request, res: Response) => {

        try{
            await sendEmail(createMessage(req.body as FormSendEmail))
            res.status(200).json({
                message: 'Email send',
                statusCode: 200,
            });

        }catch (error) {
            // @ts-ignore
            console.error(error.body);
            res.status(500).json({
                message: 'Email not send',
                statusCode: 500,
            })
        }
    }
}

export default EmailController;