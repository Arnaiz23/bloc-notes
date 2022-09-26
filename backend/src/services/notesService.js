const { exists } = require("../database/schemas/Folder")
const Notes = require("../database/schemas/Notes")
const Folder = require("../database/schemas/Folder")

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

  let folder
  if (body.folder_id.length > 0) {
    try {
      folder = await Folder.findById(body.folder_id)
    } catch (err) {
      return { status: "The ID folder doesn't exists" }
    }
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

  await Folder.findByIdAndUpdate(updateNote.folder_id, {
    length: folder.length + 1,
  })

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

  try {
    const folder = await Folder.findById(response.folder_id)
    await Folder.findByIdAndUpdate(response.folder_id, {
      length: folder.length - 1,
    })
  } catch (err) {
    console.log(err)
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
