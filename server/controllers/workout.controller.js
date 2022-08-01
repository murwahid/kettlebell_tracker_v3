const { Workout } = require('../models/workout.models');
require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

const accountSid = "AC8b8c58f8f0d76d6644b01c213371b2dc"; 
const authToken = "61f3ae5f4271df749e068293edcce6c9";

//TWILIO
const client = require('twilio')(accountSid, authToken);

// req.body.to,
// req.body.body


const name = "Mustafa"

const message = "This is a text from " + name

const reps = 20; 
const energy = 4; 

const workoutSummary = `==WORKOUT SUMMARY== \n DATE \n REPS: ${reps} \n ENERGY LEVEL: ${energy}/5 \n FATIGUE: /5`;


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}


module.exports.createTextMessage = (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
        .create({
            from:+13257158031,
            to: req.body.to,
            body: req.body.body,
        })
        .then(() => {
            res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
            console.log(err);
            res.send(JSON.stringify({ success: false }));
        });
}

//CREATE
module.exports.createWorkout = (request,response) => {
    const {exercise, reps, startStop, ease, notes, energyLvl, fatigueLvl} = request.body;
    Workout.create({
      exercise, 
      reps, 
      startStop, 
      ease, 
      notes, 
      energyLvl, 
      fatigueLvl
    })
    .then(workout=> response.json(workout))
    .catch(err=>response.json(err))
}

//READ/GET ALL
module.exports.getAllWorkouts = (request,response) => {
    Workout.find({})
    .then(workout => response.json(workout))
    .catch(err=> response.json(err))
}

//DELETE WORKOUT
module.exports.deleteWorkout = (request,response) => {
    Workout.findByIdAndDelete({_id:request.params.id})
    .then(workout => response.json(workout))
    .catch(err=>response.json(err))
}