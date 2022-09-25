const mongoose = require("mongoose")
const Folder = require("../database/schemas/Folder")

const { server } = require("../index")

const { initialFolders, folderUrl, api } = require("./helpers")

beforeEach(async () => {
  await Folder.deleteMany({})

  for (const folder of initialFolders) {
    const newFolder = new Folder(folder)
    await newFolder.save()
  }
})

// Get Folders
describe("/folders getFolders", () => {
  it("if all the folders return in json format", async () => {
    await api
      .get(folderUrl)
      .expect(200)
      .expect("Content-type", /application\/json/)
  })

  it("if exists as minimum 2 folder", async () => {
    const response = await api.get(folderUrl).expect(200)
    const { data } = response.body
    expect(data).toHaveLength(initialFolders.length)
  })
})

afterAll(async () => {
  mongoose.connection.close()
  server.close()
})
