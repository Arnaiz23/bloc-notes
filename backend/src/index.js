const express = require("express")
require("dotenv").config()
const cors = require("cors")

const notesRoutes = require("./v1/routes/notesRoutes")
const folderRoutes = require("./v1/routes/folderRoutes")
require("./database/db")

const app = express()
const PORT = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use("/api/v1", [notesRoutes, folderRoutes])

app.listen(PORT, () => {
  console.log("🚀 Application running in port:", PORT)
})
