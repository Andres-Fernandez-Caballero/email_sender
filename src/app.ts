import express from 'express';
import routes from "@src/routes";
import cors, {CorsOptions} from 'cors';

const app = express();


const corsOptions: CorsOptions = {
    origin: '*',
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

export default app;
