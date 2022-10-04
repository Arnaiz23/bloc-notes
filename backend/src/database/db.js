const mongoose = require("mongoose")

let url
if (process.env.NODE_ENV === "prod") {
  url = `mongodb+srv://${process.env.USER_BBDD}:${process.env.PASSWORD_BBDD}@${process.env.URL_BBDD}/${process.env.DB_BBDD}?retryWrites=true&w=majority`
} else {
  url = `mongodb://${process.env.URL_BBDD}:${process.env.PORT_BBDD}/${process.env.DB_BBDD}`
}

mongoose
  .connect(url, { useNewUrlParser: true })
  .then((db) => console.log("📔 Database connected"))
  .catch((err) => console.log(err))
