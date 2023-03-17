import {EmailMessage, FormSendEmail} from "@interfaces/emailMessage.interface";
import sendGrid from '@sendgrid/mail';
import {SENDER_EMAIL, SENDER_SENDGRID_API_KEY} from "@constants/emailSenderConfig";
export const sendEmail = async (message: EmailMessage) => {
    sendGrid.setApiKey(SENDER_SENDGRID_API_KEY);
    await sendGrid.send(message);
}

export const createMessage = (form: FormSendEmail) => {
    return {
        to: form.addressed,
        from: SENDER_EMAIL,
        subject: form.subject,
        html: form.messageInHtmlFormat,
    }
}
