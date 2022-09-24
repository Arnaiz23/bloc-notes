const {
  getNotesService,
  createNoteService,
  updateNoteService,
  getNoteService,
  deleteNoteService,
} = require("../services/notesService")

async function getNotes(req, res) {
  const notes = await getNotesService()
  if (notes.length < 0) {
    return res.status(505).send({
      status: "ERROR",
      data: "Error with the notes store",
    })
  }
  res.status(200).send({
    status: "OK",
    data: notes,
  })
}

const getNote = async (req, res) => {
  const { id } = req.params

  const getNote = await getNoteService(id)

  if (!getNote || getNote.status) {
    return res.status(404).send({
      status: "ERROR",
      data: "This ID isn't correct",
    })
  }

  res.status(200).send({
    status: "OK",
    data: getNote,
  })
}

const createNote = async (req, res) => {
  const body = req.body

  if (
    typeof body.title === "undefined" ||
    body.title.length === 0 ||
    typeof body.title !== "string"
  ) {
    return res.status(400).send({
      status: "ERROR",
      data: "Error in the TITLE field",
    })
  }

  if (
    typeof body.content === "undefined" ||
    body.content.length === 0 ||
    typeof body.content !== "string"
  ) {
    return res.status(400).send({
      status: "ERROR",
      data: "Error in the CONTENT field",
    })
  }

  const newNote = await createNoteService(body)

  res.status(201).send({
    status: "OK",
    data: newNote,
  })
}

const updateNote = async (req, res) => {
  const { body } = req
  const { id } = req.params

  if (
    typeof body.title === "undefined" ||
    typeof body.title !== "string" ||
    body.title.length === 0
  ) {
    return res.status(400).send({
      status: "ERROR",
      data: "Error in the TITLE field",
    })
  }

  if (
    typeof body.content === "undefined" ||
    typeof body.content !== "string" ||
    body.content.length === 0
  ) {
    return res.status(400).send({
      status: "ERROR",
      data: "Error in the CONTENT field",
    })
  }

  const updateNote = await updateNoteService(id, body)

  if (updateNote.status) {
    return res.status(404).send({
      status: "ERROR",
      data: updateNote.status,
    })
  }

  res.status(200).send({
    status: "OK",
    data: updateNote,
  })
}

const deleteNote = async (req, res) => {
  const { id } = req.params

  const deleteNote = await deleteNoteService(id)

  if (deleteNote.status) {
    return res.status(404).send({
      status: "ERROR",
      data: "This ID isn't exists",
    })
  }

  res.status(200).send({
    status: "OK",
    data: deleteNote,
  })
}

module.exports = { getNotes, createNote, updateNote, getNote, deleteNote }
