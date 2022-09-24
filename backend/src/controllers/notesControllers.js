const {
  getNotesService,
  createNoteService,
  updateNoteService,
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
      message: "Error in the TITLE field",
    })
  }

  if (
    typeof body.content === "undefined" ||
    typeof body.content !== "string" ||
    body.content.length === 0
  ) {
    return res.status(400).send({
      status: "ERROR",
      message: "Error in the CONTENT field",
    })
  }

  const updateNote = await updateNoteService(id, body)

  if (updateNote.status) {
    return res.status(404).send({
      status: "ERROR",
      message: "This ID isn't correct",
    })
  }

  res.status(200).send({
    status: "OK",
    message: updateNote,
  })
}

module.exports = { getNotes, createNote, updateNote }
