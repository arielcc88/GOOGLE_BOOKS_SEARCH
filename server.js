const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// DB connection using mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});
