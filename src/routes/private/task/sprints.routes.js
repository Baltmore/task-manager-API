import { Router } from 'express';
import {
  getSprint,
  getSprintById,
  createSprint,
  updateSprint,
  deleteSprint,
} from '../../../controllers/task/sprintsController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getSprint);
router.get('/id', getSprintById);
router.post('/create', createSprint);
router.put('/update', updateSprint);
router.delete('/delete', deleteSprint);

// Export the router to be used in the server
export default router;
