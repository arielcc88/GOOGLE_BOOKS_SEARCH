const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
// Routers
const apiRouter = require("./routes/api_router");

// DB connection using mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks", 
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true, useCreateIndex: true }
);

// Seeding DB for development.
require("./seeder/seed.js");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes (API)
app.use("/api", apiRouter);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`API server now on port ${PORT}!`);
});
