import * as dotenv from 'dotenv';
import {FormSendEmail} from "@interfaces/emailMessage.interface"
import request from 'supertest';
import app from "./../app";
import * as process from "process";

dotenv.config();

describe('POST /email/send', () => {
    it('GET root path', async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    })

    it('should send an email', async () => {
        const bodyForm: FormSendEmail = {
            subject: 'Test correct send',
            messageInHtmlFormat: '<h1>Test</h1>',
            addressed: process.env.EMAIL_SENDER as string,
        }

        const response: request.Response = await request(app)
            .post('/email/send')
            .send(bodyForm)

        console.log(response.body)
        expect(response.status).toEqual(200);
        expect(response.body.message).toBe('Email send');
        expect(response.body.statusCode).toBe(200);
    })

    it('should not send an email because submit length got less than 5 characters', async () => {
        const bodyForm: FormSendEmail = {
            subject: 'test',
            messageInHtmlFormat: '<h1>Test</h1>',
            addressed: process.env.EMAIL_SENDER as string,
        }

        const response: request.Response = await request(app)
            .post('/email/send')
            .send(bodyForm)

        expect(response.status).toEqual(400);
        expect(response.body.message).toBe('Subject too short');
        expect(response.body.statusCode).toBe(400);
    })

    it('should not send an email because submit length got more than 50 characters', async () => {
        const bodyForm: FormSendEmail = {
            subject:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultrices aliquam, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Donec auctor, nisl eget ultrices aliquam, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.',
            messageInHtmlFormat: '<h1>Test</h1>',
            addressed: process.env.EMAIL_SENDER as string,
        }

        const response: request.Response = await request(app)
            .post('/email/send')
            .send(bodyForm)

        expect(response.status).toEqual(400);
        expect(response.body.message).toBe('Subject too long');
        expect(response.body.statusCode).toBe(400);
    })

    it('should not send an email because email not valid', async () => {
        const bodyForm: FormSendEmail = {
            subject: 'test!',
            messageInHtmlFormat: '<h1>Test</h1>',
            addressed: 'test',
        }

        const response: request.Response = await request(app)
            .post('/email/send')
            .send(bodyForm)

        expect(response.status).toEqual(400);
        expect(response.body.message).toBe('Email not valid');
        expect(response.body.statusCode).toBe(400);
    })

    it('should not send an email because message is empty', async () => {
        const bodyForm: FormSendEmail = {
            subject: 'test!',
            messageInHtmlFormat: '',
            addressed: process.env.EMAIL_SENDER as string,
        }

        const response: request.Response = await request(app)
            .post('/email/send')
            .send(bodyForm)

        expect(response.status).toEqual(400);
        expect(response.body.message).toBe('Message must be not empty');
        expect(response.body.statusCode).toBe(400);
    })
})