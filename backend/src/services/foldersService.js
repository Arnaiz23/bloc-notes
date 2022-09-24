const Folder = require("../database/schemas/Folder")

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

module.exports = { createFolderService }
