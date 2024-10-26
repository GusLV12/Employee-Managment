import express from 'express';
import cors from "cors";
import routerEmployee from './routes/employee.routes.js';
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routerEmployee)

export default app;