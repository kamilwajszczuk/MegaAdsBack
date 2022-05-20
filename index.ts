import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import {handleErrors, ValidationError} from "./utils/errors";


const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(json());

app.get('/', async (req,res )=>{
    throw new ValidationError('Deeeamn!')
})

app.use(handleErrors);

app.listen( 3001, '0.0.0.0', ()=>{
    console.log('listening on port http://localhost:3001')
})