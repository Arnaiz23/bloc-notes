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

// Get Folders
describe("/folders get one folder", () => {
  it("if i can return the first folder", async () => {
    const response = await api.get(folderUrl)
    const { data: firstData } = response.body

    const secondResponse = await api
      .get(folderUrl + "/" + firstData[0]._id)
      .expect(200)
    const { data: secondData } = secondResponse.body
    const { name } = secondData
    expect(name).toBe(initialFolders[0].folderName)
  })

  it("if i can't return a folder if the ID is fake", async () => {
    await api.get(folderUrl + "/1213").expect(404)
  })
})

// Create folder
describe("/notes createFolders", () => {
  it("if i can create a new folder", async () => {
    const newFolder = {
      name: "New folder test",
      length: 0,
    }

    await api.post(folderUrl).send(newFolder).expect(201)
    const response = await api.get(folderUrl)
    const { data } = response.body
    expect(data).toHaveLength(initialFolders.length + 1)
  })

  it("if i can't create a folder if the nameFolder is empty", async () => {
    const newFolder = {
      name: "",
      length: 0,
    }

    await api.post(folderUrl).send(newFolder).expect(400)
    const response = await api.get(folderUrl)
    const { data } = response.body
    expect(data).toHaveLength(initialFolders.length)
  })
})

// Delete Folder
describe("/notes deleteFolders", () => {
  it("if i can delete the first folder", async () => {
    const response = await api.get(folderUrl)
    const { data } = response.body

    await api.delete(folderUrl + "/" + data[0]._id).expect(200)
    expect(data).toHaveLength(initialFolders.length)
  })

  it("if not deleted any folder if the ID is fake", async () => {
    await api.delete(folderUrl + "/124").expect(400)
    const response = await api.get(folderUrl)
    const { data } = response.body
    expect(data).toHaveLength(initialFolders.length)
  })
})

afterAll(async () => {
  mongoose.connection.close()
  server.close()
})
