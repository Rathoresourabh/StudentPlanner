let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let expressbearertoken = require("express-bearer-token");
let admin = require("firebase-admin");
let { parse } = require("json2csv");
var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

mongoose.connect(
  "mongodb+srv://sourabh:okay@cluster0.kmql7.mongodb.net/StudentPerformance4?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const fields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "state",
  "country",
  "FatherName",
  "MotherName",
  "Address",
  "PermanentAddress",
  "FathersOccupation",
  "MothersOccupation",
  "FatherPhone",
  "FatherEmail",
  "MotherPhone",
  "BloodGroup",
  "Division",
  "RollNo",
  "PRN",
];
const need = { fields };

const Application = mongoose.model("Application", {
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  state: String,
  country: String,
  FatherName: String,
  MotherName: String,
  Address: String,
  PermanentAddress: String,
  FathersOccupation: String,
  MothersOccupation: String,
  FatherPhone: Number,
  MotherPhone: Number,
  FatherEmail: String,
  BloodGroup: String,
  Division: String,
  RollNo: Number,
  PRN: Number,
});

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
app.use(expressbearertoken());

//check our api is working

app.get("/", function (req, res) {
  // console.log(req.user)
  res.send("Working");
});

//get all users data
app.get("/getUserData", async function (req, res) {
  const usersData = await Application.find();
  res.send(usersData);
});

// get single user by email
app.get("/getUserData/email/:id", async function (req, res) {
  const usersDataByEmail = await Application.find();
  const singleUser = usersDataByEmail.filter((e) => e.email === req.params.id);
  res.send(singleUser);
});

//submit form - personal detail.
app.post("/submit", async function (req, res) {
  console.log(req.user);
  console.log(req.body);
  const usersDataByEmail = await Application.find();
  const singleUser = usersDataByEmail.filter((e) => e.email === req.body.email);
  if (singleUser) {
    //yet to be implemented.
    console.log(singleUser)
    Application.findByIdAndUpdate(singleUser[0]._id, req.body, (err, res) => {
      if (err) throw err;
      console.log("data edited....");
    });
    res.send(singleUser)
  } else {
    let application = new Application(req.body);
    application
      .save()
      .then((response) => res.send("Submitted"))
      .catch((error) => res.sendStatus(501));
  }
});

//csv generate - personal details
app.get("/detail", function (req, res) {
  Application.find()
    .then((response) => {
      console.log(response);
      const csv = parse(response, need);
      console.log(csv);
      res.header("Content-Type", "text/csv");
      res.attachment("application.csv");
      return res.send(csv);
    })
    .catch((error) => res.sendStatus(501));
});

//verify user
app.use(function (req, res, next) {
  if (req.token) {
    admin
      .auth()
      .verifyIdToken(req.token)
      .then(function (user) {
        req.user = user;
        console.log(user);
        next();
      })
      .catch(function (error) {
        res.sendStatus(401);
      });
  } else {
    res.sendStatus(401);
  }
});

app.listen(PORT, function () {
  console.log(`App started at port number ${PORT}`);
});
