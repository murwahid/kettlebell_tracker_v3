//IMPORT MONGOOSE
const mongoose = require('mongoose');

//CONNECT MONGOOSE
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log("Established a connection to the database"))
.catch(err => console.log("Something went wrong when connecting to the database", err));