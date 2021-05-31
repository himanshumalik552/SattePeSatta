const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose')
const app = express();


app.use(cors());
app.use(express.json());


//connect connection from mongodb

mongoose.connect("mongodb+srv://himanshumalik552:storybook123@cluster0.8osju.mongodb.net/sattePesatta",

{
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
})


//require route

app.use("/", require("./routes/stateRoute"))

app.listen(3001, () => console.log('Example app is listening on port 3001.'));