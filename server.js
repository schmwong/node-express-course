/*
Before beginning, install express locally by running in this folder:
npm init -y
npm install express --save
*/

// gives you access to the express library by searching your node_modules for "express"
const express = require("express");

// creates an instance of the express constructor, which we will name "app"
const app = express();

// Some mock data
const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

// starts up the server locally on the port given as its first argument (8000)
app.listen(8000, function () {
  console.log("server is running");
});

/*
Test run in terminal: node server.js
ctrl C to quit
*/
