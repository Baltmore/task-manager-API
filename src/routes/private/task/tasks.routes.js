import { Router } from 'express';
import {
  getTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from '../../../controllers/task/tasksController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getTask);
router.get('/id', getTaskById);
router.post('/create', createTask);
router.put('/update', updateTask);
router.delete('/delete', deleteTask);

// Export the router to be used in the server
export default router;
