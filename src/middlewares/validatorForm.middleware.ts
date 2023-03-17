import {NextFunction, Request, Response} from "express";
import {TEXT_EMPTY, TEXT_MIN_LENGTH, TEXT_TO_LONG} from "@constants/requeriments";
import {isNotValidEmail} from "@utils/emailValidator";
import {FormSendEmail} from "@interfaces/emailMessage.interface";

export const validateFormSendEmail = (req: Request, res: Response, next: NextFunction) => {
    const {
        subject,
        addressed,
        messageInHtmlFormat
    }: FormSendEmail = req.body;


    if (!subject || !addressed) return res.status(400).json({
        message: 'Missing data or empty',
        statusCode: 400,
    })

    if (subject.length < TEXT_MIN_LENGTH) return res.status(400).json({
        message: 'Subject too short',
        statusCode: 400,
    })

    if(subject.length > TEXT_TO_LONG) return res.status(400).json({
        message: 'Subject too long',
        statusCode: 400,
    })

    if (messageInHtmlFormat.length < TEXT_EMPTY || !messageInHtmlFormat) return res.status(400).json({
        message: 'Message must be not empty',
        statusCode: 400,
    })

    if (isNotValidEmail(addressed)) return res.status(400).json({
        message: 'Email not valid',
        statusCode: 400,
    })

    next();
}