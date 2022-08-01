const WorkoutController = require('../controllers/workout.controller');
module.exports = function(app) {
    app.get('/api',WorkoutController.index);
    app.get('/api/workouts', WorkoutController.getAllWorkouts);
    app.post('/api/messages', WorkoutController.createTextMessage);
    app.post('/api/new', WorkoutController.createWorkout);
    app.delete('/api/delete/:id', WorkoutController.deleteWorkout);
}