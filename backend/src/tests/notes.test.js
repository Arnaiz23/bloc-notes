const mongoose = require("mongoose")

const { server } = require("../index")
const Note = require("../database/schemas/Notes")

const {
  api,
  url,
  initialNotes,
  newNote,
  newNoteError,
  getAllContentsFromNotes,
} = require("./helpers")

beforeEach(async () => {
  /* Delete all the notes */
  await Note.deleteMany({})

  const note1 = new Note(initialNotes[0])
  await note1.save()

  const note2 = new Note(initialNotes[1])
  await note2.save()
})

describe("/notes getAllNotes", () => {
  it("getAllNotes", async () => {
    await api
      .get(url)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  it("getAllNotes have as minimum 2 notes", async () => {
    const response = await api.get(url)
    expect(response.body.data).toHaveLength(initialNotes.length)
  })
})

describe("/notes getOneNote", () => {
  it("getOneNote (404) badID", async () => {
    const badId = "/asas"
    await api
      .get(url + badId)
      .expect(404)
      .expect("Content-type", /application\/json/)
  })
  it("getOneNote (200)", async () => {
    const response = await api.get(url)
    const { data } = response.body
    await api
      .get(url + "/" + data[0]._id)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  it("getOneNote. Check if one note has the content (Esta es la nueva nota y es la primera)", async () => {
    const { contents } = await getAllContentsFromNotes()
    expect(contents).toContain("Esta es la nueva nota y es la primera")
  })
})

describe("/notes create Note", () => {
  it("Create note (400) title empty", async () => {
    await api
      .post(url)
      .send(newNoteError)
      .expect(400)
      .expect("Content-type", /application\/json/)

    const response = await api.get(url)
    const { data } = response.body

    expect(data).toHaveLength(initialNotes.length)
  })

  it("Create note (201)", async () => {
    await api
      .post(url)
      .send(newNote)
      .expect(201)
      .expect("Content-type", /application\/json/)

    const { contents, data } = await getAllContentsFromNotes()
    expect(data).toHaveLength(initialNotes.length + 1)
    expect(contents).toContain(newNote.content)
  })
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
