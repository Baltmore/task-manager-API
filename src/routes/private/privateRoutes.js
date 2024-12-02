// export default privateRouter

import { Router } from 'express';

import departmentsRouter from './company/departments.routes.js';
import rolesRouter from './company/roles.routes.js';

import entitiesRouter from './entity/entities.routes.js';
import entitiesTaskRouter from './entity/entitiesTask.routes.js';

import prioritiesRoutes from './task/priorities.routes.js';
import sprintsRoutes from './task/sprints.routes.js';
import stepsRoutes from './task/steps.routes.js';
import tagsRoutes from './task/tags.routes.js';
import tasksRoutes from './task/tasks.routes.js';

// Create a new instance of the router
const privateRouter = Router();

// routes for company
privateRouter.use('/departments', departmentsRouter);
privateRouter.use('/roles', rolesRouter);

// routes for entity
privateRouter.use('/entities', entitiesRouter);
privateRouter.use('/entities/task', entitiesTaskRouter);

// routes for task
privateRouter.use('/priorities', prioritiesRoutes);
privateRouter.use('/sprints', sprintsRoutes);
privateRouter.use('/steps', stepsRoutes);
privateRouter.use('/tags', tagsRoutes);
privateRouter.use('/tasks', tasksRoutes);

// Export the router
export default privateRouter;
