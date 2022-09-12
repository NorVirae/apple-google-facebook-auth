
const express = require("express")
const {OAuth2Client} = require('google-auth-library');

const router = express.Router()


async function verify() {
    console.log(process.env.CLIENT_ID, "this is client id")
    const client = new OAuth2Client(process.env.CLIENT_ID);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
}

router.post("/login", async ()=> {
    try{
        cawait verify()
    }

})


module.exports = router