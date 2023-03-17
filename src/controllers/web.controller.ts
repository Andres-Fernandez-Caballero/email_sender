import {Request, Response} from "express";

const webController = {
    index: (req: Request, res: Response) => {
        res.send('Hello World! si');
    },

    notFound: (req: Request, res: Response) => {
        res.status(404).send('Not found');
    }
}

export default webController;
