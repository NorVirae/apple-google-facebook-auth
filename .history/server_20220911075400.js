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

app.use()