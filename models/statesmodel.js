const mongoose = require('mongoose');

const stateSchema = {
    uttarpradesh: Number,
    haryana: Number,
    uttarakhand: Number,
    punjab: Number,
    madhyapradesh: Number,
    bihar: Number,
}

const State = mongoose.model("State", stateSchema);


module.exports = State;