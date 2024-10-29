import {Router} from 'express';
import { createEmployee, showEmployees } from '../middlewares/employee.middlewares.js';

const router = Router();

router.get('/show', showEmployees);

router.post('/create', createEmployee);

export default router;