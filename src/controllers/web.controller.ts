import {Request, Response} from "express";

const webController = {
    index: (req: Request, res: Response) => {
        res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Email Sender</title>
            <style>
                body {
                    font-family: sans-serif;
                    text-align: center;
                }
                header {
                    background-color: #f1f1f1;
                    padding: 20px;
                }
                </style>
        </head>
        <body>
            <header>
                <h1>Email Sender Service</h1>
                <p>Servicio dedicado al envio de emails automagicamente 🪄</p>
            </header>
        </body>
        </html>
        
        `);
    },

    notFound: (req: Request, res: Response) => {
        res.status(404).send('Not found');
    }
}

export default webController;
