require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()



app.use(passport.session())
app.use("/auth", require("./routes/auth"))

app.use(cors({
    origin: "http://localhost:8080",
    methods: "GET,POST,DELETE,PUT",
    credentials: true
}))



const port = process.env.PORT || 8080

app.listen(port, ()=>console.log(`Listening on port ${port}`))
