require('./employee.model');
const mongoose = require("mongoose");

const db1 =
  "mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/test1?retryWrites=true&w=majority";
mongoose.connect(
  db1,
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log(`Error during record insertion ${err}`);
    }
  }
);

