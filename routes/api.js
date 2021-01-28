const router = require("express").Router();
const db = require("../models")


router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post("/api/workouts", function (req, res) {
    db.Workout.create({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.post("/api/workouts/range", function (req, res) {
    db.Workout.create({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;