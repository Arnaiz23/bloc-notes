const mongoose = require("mongoose")

const Schema = mongoose.Schema

const FolderSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    unique: false,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  length: {
    type: Number,
    required: true,
    unique: false,
  },
})

module.exports = mongoose.model("Folder", FolderSchema)
