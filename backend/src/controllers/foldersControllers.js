const { createFolderService } = require("../services/foldersService")

const createFolder = async (req, res) => {
  const { body } = req

  const newFolder = await createFolderService(body)

  res.status(201).send({
    status: "OK",
    message: newFolder,
  })
}

module.exports = { createFolder }
