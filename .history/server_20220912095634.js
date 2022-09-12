require("dotenv").config()
const express = require("express")
const cors = require("cors")
const passport = require("passport")
const cookieSession = require("cookie-session")
const app = express()


app.use(
    cookieSession({
        name: "session",
        keys: ["cyberwolve"],
        maxAge: 24 * 60 * 60 * 100
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use("/auth", require("./routes/auth"))

app.use(cors({
    origin: "http://localhost:8080",
    methods: "GET,POST,DELETE,PUT",
    credentials: true
}))



const port = process.env.PORT || 8080

app.listen(port, ()=>console.log(`Listening on port ${port}`))
