import {Router} from 'express';
import { createEmployee, showEmployees, updateEmployee } from '../middlewares/employee.middlewares.js';

const router = Router();

router.get('/show', showEmployees);

router.post('/create', createEmployee);

router.put('/update', updateEmployee);

export default router;