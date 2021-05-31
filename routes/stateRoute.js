const express = require("express");
const router = express.Router();
const State = require("../models/statesmodel");

router.route("/create").post((req, res) => {
  const uttarpradesh = req.body.uttarpradesh;
  const haryana = req.body.haryana;
  const uttarakhand = req.body.uttarakhand;
  const punjab = req.body.punjab;
  const madhyapradesh = req.body.madhyapradesh;
  const bihar = req.body.bihar;

  const newState = new State({
    uttarpradesh,
    haryana,
    uttarakhand,
    punjab,
    madhyapradesh,
    bihar,
  });
  newState.save();
});


router.route("/states").get((req, res)=>{
    State.find()
         .then(foundStates =>res.json(foundStates))
})

module.exports = router;
