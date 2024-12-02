import { Router } from 'express';
import {
  getRoles,
  getRolesById,
  createRoles,
  updateRoles,
  deleteRoles,
} from '../../../controllers/company/rolesController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getRoles);
router.get('/id', getRolesById);
router.post('/create', createRoles);
router.put('/update', updateRoles);
router.delete('/delete', deleteRoles);
