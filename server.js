const express = require("express");
TODO: // const logger = require("morgan");
var mongoose = require("mongoose");

// Sets port for deploymet and localhost
const PORT = process.env.PORT || 8080;
// grabs exported files from models
const db = require("./models");
// Sets up app express
const app = express();

TODO:// app.use(logger("dev"));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set Handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({
  defaultLayout: "main",
})
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
  useNewUrlParser: true
});
// PUBLIC routes
// Get main page for user to select New Workout or continue prior workout
// db.Workout.create ({ name: "Death by Burpees"}) 
// .then(dbWorkout => {
//     console.log(dbWorkout);
// }).catch(({ message }) => {
//     console.log(message);
// });
// app.get("/", (req, res) => {
//     res.render("index")
// });

app.get("/newworkout", (req, res) => {
    res.render("newworkout")
    // TODO: dynamically add additional inputs for additional exercises
});

app.get("/priorworkouts", function(req, res){
    db.Workout.find({}).then (function(workout){
        console.log("get request priorworkouts: ", workout)
        res.render("priorworkouts", {workout})
    });
});

app.get("/currentworkout", (req, res) => {
    db.Workout.find({name: `${req.body}`}).then(workout =>{

    })
    res.render("currentworkout")
});

app.get("/workout/:name", (req, res) => {
   
})

app.get("/api/exercises/:name", (req, res) => {

})

// API routes, POST routes, DELETE routes
app.post("/api/workouts", (req, res) => {
    db.Workout.create ({ name: body}) 
    .then(dbWorkout => {
        console.log(dbWorkout);
    }).catch(({ message }) => {
        console.log(message);
    });
})

app.put("/api/workouts/:id", (req, res) => {

})

app.delete("/api/workouts/:id", (req, res) => {

})

app.post("/api/exercises", (req, res) => {

})

app.delete("api/exercises/:id", (req, res) => {

})

app.post("/submit", ({ body }, res) => {
    db.Exercise.create(body).then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id}}, { new: true}))
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

app.post("/api/exercises", ({ body }, res) => {
    db.Workout.create ({ name: body}) 
    .then(dbWorkout => {
        console.log(dbWorkout);
    }).catch(({ message }) => {
        console.log(message);
    });
});

app.get("/exercises", (req, res)=> {
    db.Exercise.find({}).then(dbExercise => {
        res.json(dbExercise);
    }).catch(err => {
        res.json(err);
    });
});

app.get("/workout", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log(`Now listening on port: ${PORT}`);
});
