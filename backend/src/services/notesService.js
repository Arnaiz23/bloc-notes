const Notes = require("../database/schemas/Notes")

const getNotesService = async () => {
  const notes = await Notes.find()
  return notes
}

const createNoteService = async (body) => {
  const date = new Date()

  body.createdAt = date
  body.updatedAt = date

  const newNote = await Notes.create(body)

  return newNote
}

const updateNoteService = async (id, body) => {
  try {
    const exists = await Notes.findById(id)

    if (!exists) {
      return { status: "This ID isn't correct" }
    }
  } catch (err) {
    return { status: "Error" }
  }

  const date = new Date()

  body.updatedAt = date

  let updateNote
  try {
    updateNote = await Notes.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    })
  } catch (err) {
    return { status: "Error in the update proccess" }
  }
  return updateNote
}

const getNoteService = async (id) => {
  let note

  try {
    note = await Notes.findById(id)
  } catch (err) {
    return { status: "Error" }
  }

  return note
}

const deleteNoteService = async (id) => {
  let response

  try {
    response = await Notes.findByIdAndDelete(id)
  } catch (err) {
    response = { status: "Error" }
  }
  return response
}

module.exports = {
  getNotesService,
  createNoteService,
  updateNoteService,
  getNoteService,
  deleteNoteService,
}
