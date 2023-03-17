export interface EmailMessage {
    from: string;
    to: string;
    subject: string;
    html: string;
}

export interface FormSendEmail {
    subject: string;
    addressed: string;
    messageInHtmlFormat: string;
}