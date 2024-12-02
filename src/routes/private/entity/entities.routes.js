import { Router } from 'express';
import {
  getEntity,
  getEntityById,
  createEntity,
  updateEntity,
  deleteEntity,
} from '../../../controllers/entity/entitiesController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getEntity);
router.get('/id', getEntityById);
router.post('/create', createEntity);
router.put('/update', updateEntity);
router.delete('/delete', deleteEntity);
