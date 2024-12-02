import { Router } from 'express';
import {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from '../../../controllers/company/departmentsController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getDepartments);
router.get('/id', getDepartmentById);
router.post('/create', createDepartment);
router.put('/update', updateDepartment);
router.delete('/delete', deleteDepartment);
