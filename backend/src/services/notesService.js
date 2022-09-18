const Notes = require("../database/schemas/Notes")

const getNotesService = async () => {
  const notes = await Notes.find()
  return notes
}

const createNoteService = async (body) => {
  const newNote = await Notes.create(body)
  return newNote
}

module.exports = { getNotesService, createNoteService }
