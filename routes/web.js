const router = require('express').Router();
const tasksController = require('../controllers/TasksController');

router.get('/tasks', tasksController.show);

router.post('/tasks', tasksController.store);

router.post('/tasks/:id/done', tasksController.doneStatus);

router.post('/tasks/:id/delete', tasksController.delete);

module.exports = router;
