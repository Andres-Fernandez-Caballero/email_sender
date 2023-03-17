import {createServer} from "http";
import app from "./src/app";
import * as dotenv from 'dotenv' 
dotenv.config()

const server = createServer(app)

const port = process.env.PORT ?? 3000;
server.listen(port, () => {
    console.log('Server started on port ' + port);
})