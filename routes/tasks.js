import express from 'express';
const router = express.Router();
import {
    getAllTasks,
    createTask,
    getTasks,
    updateTasks,
    deleteTask,
} from '../controller/tasks.js';

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTasks).patch(updateTasks).delete(deleteTask);

export default router;
