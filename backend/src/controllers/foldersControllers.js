const {
  getFoldersService,
  createFolderService,
  updateFolderService,
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

const updateFolders = async (req, res) => {
  const { id } = req.params
  const { body } = req

  const updateFolder = await updateFolderService(id, body)

  if (updateFolder.status) {
    return res.status(400).send({
      status: "ERROR",
      message: "This ID isn't exists",
    })
  }

  res.status(200).send({
    status: "OK",
    message: updateFolder,
  })
}

module.exports = { getFolders, createFolder, updateFolders }
