import { Router } from 'express';
import {
  getEntityTask,
  getEntityTaskById,
  createEntityTask,
  updateEntityTask,
  deleteEntityTask,
} from '../../../controllers/entity/entitiesTaskController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getEntityTask);
router.get('/id', getEntityTaskById);
router.post('/create', createEntityTask);
router.put('/update', updateEntityTask);
router.delete('/delete', deleteEntityTask);
