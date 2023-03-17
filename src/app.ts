import express from 'express';
import routes from "@src/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

export default app;
