const Folder = require("../database/schemas/Folder")

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

  try {
    createFolder = await Folder.create(body)
  } catch (err) {
    console.log(err)
  }

  return createFolder
}

module.exports = { getFoldersService, createFolderService }
