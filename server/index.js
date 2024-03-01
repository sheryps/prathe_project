const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const logic = require("./logic");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/prathe").then(() => {
  console.log("connected to database sucessfully");
});

var listener = app.listen(3000, () => {
  console.log("server is running" + listener.address().port);
});

//api call to get allemployee details

app.get("/", (req, res) => {
  logic.allEmployees().then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.post("/create", (req, res) => {
  logic
    .addEmployees(
      req.body.name,
      req.body.email,
      req.body.age,
      req.body.address,
      req.body.designation
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.put("/update/:id", (req, res) => {
  console.log('connection received');
  const id=req.params.id
  logic
    .editEmployees(
      id,
      req.body.name,
      req.body.email,
      req.body.age,
      req.body.address,
      req.body.designation
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});


app.delete('/delete/:id',(req,res)=>{
  logic.deleteEmployees(req.params.id).then(
      (result)=>{
          res.status(result.statusCode).json(result)
      }
      
  )
})