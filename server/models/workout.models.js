//IMPORT MONGOOSE
const mongoose = require('mongoose');
//CREATE NEW SCHEMA
const WorkoutSchema = new mongoose.Schema({
    exercise: {
            type:String, 
            required:[true,"Exercise required"]
    },
    reps: {
        type: Number, 
        required:[true, "reps required to do a workout"],
        min:[1,"At least 1 rep required"]
    }, 
    startStop: {
        type:String, 
    }, 
    ease: {
        type:String
    }, 
    notes:{ 
        type:String
    }, 
    energyLvl: {
        type:Number, 
        min:1,
        max:5
    }, 
    fatigueLvl: {
        type:Number, 
        min:1, 
        max:5
    }
}, {timestamps: true});

//EXPORT THE NEW SCHEMA
module.exports.Workout = mongoose.model('Workout', WorkoutSchema);