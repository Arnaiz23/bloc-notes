const {
  getFoldersService,
  createFolderService,
} = require("../services/foldersService")

const getFolders = async (req, res) => {
  const getFolders = await getFoldersService()

  res.status(200).send({
    status: "OK",
    message: getFolders,
  })
}

const createFolder = async (req, res) => {
  const { body } = req

  const newFolder = await createFolderService(body)

  res.status(201).send({
    status: "OK",
    message: newFolder,
  })
}

module.exports = { getFolders, createFolder }
