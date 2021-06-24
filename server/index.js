let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sourabh:okay@cluster0.kmql7.mongodb.net/StudentPerformance?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Application = mongoose.model("Application", {
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  state: String,
  country: String,
  Sem1Marks: String,
  Sem2Marks: String,
  Sem3Marks: String,
  Sem4Marks: String,
  Sem5Marks: String,
  Sem6Marks: String,
  Sem7Marks: String,
  Sem8Marks: String,
  Sem9Marks: String,
  Sem10Marks: String,
});

let app = express();

let PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.post("/submit", function (req, res) {
  console.log(req.body);
  let application = new Application(req.body);

  application
    .save()
    .then((response) => res.send("Submitted"))
    .catch((error) => res.sendStatus(501));
});

app.get("/", function (req, res) {
  res.send("Working");
});

app.get("/applications", function (req, res) {
  Application.find()
    .then((response) => {
      console.log(response);
     
    })
    .catch((error) => res.sendStatus(501));
});

app.listen(PORT, function () {
  console.log(`App started at port number ${PORT}`);
});
