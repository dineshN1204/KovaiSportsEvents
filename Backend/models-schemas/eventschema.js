const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventName: String,
  description: String,
  category: String,
})

const EventModel = mongoose.model("events", eventSchema)
module.exports = EventModel
