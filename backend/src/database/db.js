const mongoose = require("mongoose")

mongoose
  .connect(
    `mongodb://${process.env.URL_BBDD}:${process.env.PORT_BBDD}/${process.env.DB_BBDD}`,
    { useNewUrlParser: true }
  )
  .then((db) => console.log("📔 Database connected"))
  .catch((err) => console.log(err))
