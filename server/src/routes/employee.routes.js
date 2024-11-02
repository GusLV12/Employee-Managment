import {Router} from 'express';
import { createEmployee, deleteEmployee, showEmployees, updateEmployee } from '../middlewares/employee.middlewares.js';

const router = Router();

router.get('/show', showEmployees);

router.post('/create', createEmployee);

router.put('/update', updateEmployee);

router.delete('/delete', deleteEmployee);

export default router;