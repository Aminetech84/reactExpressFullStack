const mongoose = require("mongoose");

mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb+srv://aminetech84:Azer1st628@cluster0.tptbq.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error!"));

db.once("open", function () {
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  kittySchema.methods.speak = function () {
    const greeting = this.name
      ? `Moew name is ${this.name}`
      : `I don't have a name`;

    console.log(greeting);
  };

  const Kitten = mongoose.model("Kitten", kittySchema);

  const silence = new Kitten({ name: "Silence" });
  console.log(silence.name);

  const fluffy = new Kitten({ name: "fluffy" });

  fluffy.speak();

  fluffy.save(function (err, fluffy) {
    if (err) {
      return console.error(err);
    }

    fluffy.speak();
  });
});
