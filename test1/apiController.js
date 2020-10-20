const express = require("express");
const mongoose = require("mongoose");
const Employee = mongoose.model("Employee");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("api/add", {
    viewTitle: "Insert here",
  });
});

router.post("/", (req, res) => {
  if (req.body._id === "") {
    insertRecord(req, res);
  } else {
    updateRecord(req, res);
  }
});

function insertRecord(req, res) {
  const employee = new Employee();
  employee.fullName = req.body.fullname;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee.save((err, doc) => {
    if (!err) {
      res.redirect("api/list");
    } else {
      if (err.name === "validationError") {
        handleValidationError(err, req.body);
        res.render("api/add", {
          viewTitle: "Insert Api",
          employee: req.body,
        });
      } else {
        console.log(`Error during record insertion ${err}`);
      }
    }
  });
}
function updateRecord(req, res) {
  Employee.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },

    (err, doc) => {
      if (!err) {
        res.redirect("api/list");
      } else {
        if (err.name === "validationError") {
          handleValidationError(err, req.body);
          res.render("api/add", {
            viewTitle: "Update Api",
            employee: req.body,
          });
        } else {
          console.log(`Error during record update ${err}`);
        }
      }
    }
  );
}

router.get("/list", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.render("api/list", {
        list: docs,
      });
    } else {
      console.log(`Error during record update ${err}`);
    }
  });
});

function handleValidationError(err, body) {
  for (const field in err.errors) {
    switch (err.errors[field].path) {
      case "fullName":
        body["fullNameError"] = err.errors[field].message;
        break;
      case "email":
        body["emailError"] = err.errors[field].message;
        break;

      default:
        break;
    }
  }
}

router.get("/:id", (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("api/add", {
        viewTitle: "Update Api",
        employee: doc,
      });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect("/api/list");
    } else {
      console.log(`Error in api delete ${err}`);
    }
  });
});

module.exports = router;
