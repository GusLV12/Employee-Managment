import {Router} from 'express';
import { createEmployee } from '../middlewares/employee.middlewares.js';

const router = Router();

router.post('/create', createEmployee);

export default router;