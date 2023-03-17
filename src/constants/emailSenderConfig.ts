import * as dotenv from 'dotenv'
dotenv.config()
export const SENDER_EMAIL = process.env.EMAIL_SENDER as string;
export const SENDER_SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;