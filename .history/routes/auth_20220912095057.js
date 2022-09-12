
const express = require("express")
const {OAuth2Client} = require('google-auth-library');

const router = express.Router()

router.get("/login", async ()=> {
const client = new OAuth2Client(process.env.CLIENT_ID);

verify().catch(console.error);
})