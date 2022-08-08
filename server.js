//STEP 1: IMPORT THE MODULE. 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
//STEP 2: USE THE MODULE. 
const app = express();
//STEP 3: CREATE THE DESIGNATED PORT 
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//EXPRESS
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));

require('./server/routes/workout.routes')(app);
require('./server/config/mongoose.config');
//STEP 4: SET UP LISTENER FOR THE PORT 
app.listen(port, () => console.log(`Listening on port:${port}`));



// app.get('/api', (req,res) => {
//     <h1>Hello World</h1>
// })
// app.post('/api/messages', (req, res) => {
//     res.header('Content-Type', 'application/json');
//     client.messages
//       .create({
//         from: process.env.TWILIO_PHONE_NUMBER,
//         to: req.body.to,
//         body: req.body.body
//       })
//       .then(() => {
//         res.send(JSON.stringify({ success: true }));
//       })
//       .catch(err => {
//         console.log(err);
//         res.send(JSON.stringify({ success: false }));
//       });
//   });
  
