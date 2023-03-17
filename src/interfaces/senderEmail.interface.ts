import sendgrid from "@sendgrid/mail";
import {EmailMessage, FormSendEmail} from "@interfaces/emailMessage.interface";
import {SENDER_EMAIL, SENDER_SENDGRID_API_KEY} from "@constants/emailSenderConfig";

export const sendEmail = async(message: EmailMessage) => {
    sendgrid.setApiKey(SENDER_SENDGRID_API_KEY);
    sendgrid.send(message)
}

export const createMessage = (dataForm: FormSendEmail ): EmailMessage => {
    return {
        from: SENDER_EMAIL,
        to: dataForm.addressed,
        subject: dataForm.subject,
        html: dataForm.messageInHtmlFormat
    } as EmailMessage;
}