
const GoogleStrategy = require("passport-google-oauth20");
const passport = require("passport")

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.clientID,
            clientSecret: process.env.clientSecret,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        function(accessToken, refreshToken, )
    )
)