import { Router } from 'express';
import {
  getTag,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
} from '../../../controllers/task/tagsController.js';

// Create a new instance of the router
const router = Router();

// Set the route for the router
router.get('/', getTag);
router.get('/id', getTagById);
router.post('/create', createTag);
router.put('/update', updateTag);
router.delete('/delete', deleteTag);

// Export the router to be used in the server
export default router;
