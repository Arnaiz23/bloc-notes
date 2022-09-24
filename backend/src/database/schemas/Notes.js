const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NotesSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    unique: false,
    required: true,
  },
  content: {
    type: String,
    unique: false,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  folder_id: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model("Notes", NotesSchema)
