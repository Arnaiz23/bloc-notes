const Folder = require("../database/schemas/Folder")
const Notes = require("../database/schemas/Notes")

const getFoldersService = async () => {
  let getFolders

  try {
    getFolders = await Folder.find()
  } catch (err) {
    console.log(err)
  }

  return getFolders
}

const createFolderService = async (body) => {
  let createFolder
  const date = new Date()

  body.createdAt = date
  body.updateAt = date

  try {
    createFolder = await Folder.create(body)
  } catch (err) {
    console.log(err)
  }

  return createFolder
}

const updateFolderService = async (id, body) => {
  /*
   * Check the errors. If any await results in error, all send "This id isn't exists"
   */
  try {
    const search = await Folder.findById(id)

    if (!search) {
      return { status: "error" }
    }

    const notes = await Notes.find({ folder_id: id })

    const date = new Date()

    body.length = notes.length
    body.updateAt = date

    const updateNote = await Folder.findByIdAndUpdate(id, body, {
      returnDocument: "after",
    })

    return updateNote
  } catch (err) {
    return { status: "error" }
  }
}

module.exports = { getFoldersService, createFolderService, updateFolderService }
