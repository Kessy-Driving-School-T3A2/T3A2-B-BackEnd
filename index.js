// pull in required dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const faqRouter  = require('./routes/FAQrouter')
const pricesRouter = require('./routes/Pricesrouter')
const userRouter = require('./routes/Userrouter')
const adminRouter = require('./routes/Adminrouter')
// initialize app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//access-controle-allow-origin for react
app.use(cors());

//database
// pull in ATLAS_URI from .env file
const uri = process.env.ATLAS_URI;
// for use with local "mongodb://localhost/faq"
// connect to mongodb using mongoose
mongoose
.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch(err => {
    console.error("Error connecting to mongoDB", err);
});


app.use(express.json());

// set the port to run the server
const port = process.env.PORT || 3000;

// // Set the region 
// AWS.config.update({region: 'ap-southeast-2'});

// // Create S3 service object
// s3 = new AWS.S3({apiVersion: '2006-03-01'});

// // Create the parameters for calling listObjects
// const bucketParams = {
//   Bucket : 'keesydrivingschool',
// };

// // Call S3 to obtain a list of the objects in the bucket
// s3.listObjects(bucketParams, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

app.use('/FAQ', faqRouter)
app.use('/prices', pricesRouter)
app.use('/', userRouter)
app.use('/admin', adminRouter)




//listening to port
app.listen(port, () => {
    console.log(
        `🌻 🌻 🌻 Express API listening on port http://localhost:${port} !🌻 🌻 🌻`
        );
    });
    