const express = require("express")
require("dotenv").config()

const notesRoutes = require("./v1/routes/notesRoutes")
require("./database/db")

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use("/api/v1", notesRoutes)

app.listen(PORT, () => {
  console.log("🚀 Application running in port:", PORT)
})
