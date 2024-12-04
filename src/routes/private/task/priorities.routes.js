import { Router } from 'express';
import {
  getPriority,
  getPriorityById,
  createPriority,
  updatePriority,
  deletePriority,
} from '../../../controllers/task/prioritiesController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getPriority);
router.get('/id', getPriorityById);
router.post('/create', createPriority);
router.put('/update', updatePriority);
router.delete('/delete', deletePriority);

// Export the router to be used in the server
export default router;
