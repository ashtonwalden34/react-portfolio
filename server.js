///////////////////////////////////////////////////////
////////////////////// SERVER.JS //////////////////////
///////////////////////////////////////////////////////
/////// This File hosts the express server and ////////
/// configures the app to host the build to heroku. ///
///////////////////////////////////////////////////////

const path = require('path');
const express = require('express');
const app = express();
const compression = require("compression");
const port = process.env.PORT || 3000;

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));
  app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "/build/index.html"));
    });
}

app.listen(port, () => {
   console.log('Server is up!');
});
