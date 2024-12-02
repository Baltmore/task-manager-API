import { Router } from 'express';
import {
  getStep,
  getStepById,
  createStep,
  updateStep,
  deleteStep,
} from '../../../controllers/task/stepsController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getStep);
router.get('/id', getStepById);
router.post('/create', createStep);
router.put('/update', updateStep);
router.delete('/delete', deleteStep);
