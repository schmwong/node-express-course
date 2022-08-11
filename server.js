/*
Before beginning, install express locally by running in this folder:
npm init -y
npm install express --save
*/

// gives you access to the express library by searching your node_modules for "express"
const express = require("express");

// creates an instance of the express constructor, which we will name "app"
const app = express();

// "body-parser" to make POST requests
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Some mock data
const mockUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

// Words with a colon in front of them in the url are treated as variables
// Access the value of each variable through req.params
app.get("/users/:id", function (req, res) {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

// function to handle a POST request made to the 'login' endpoint,
// as if a user was trying to log in
app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

// starts up the server locally on the port given as its first argument (8000)
app.listen(8000, function () {
  console.log("server is listening");
});

/*
Test run in terminal: node server.js
ctrl C to quit

Open a browser and navigate to `http://localhost:8000/users`
Should see this JSON file:
{"success":true,"message":"successfully got users. Nice!","users":[{"name":"Mark"},{"name":"Jill"}]}
*/
