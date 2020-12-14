const user = require("../models/User")
const passport = require('passport')
const authenticate = passport.authenticate("local")

const necessaryforroutes = function(req, res) {
    res.status(200)
    res.send()
}

const login = (req, res) => {
    authenticate(req, res, function() {
        console.log("authenticated", req.user.username);
        console.log("session object:", req.session);
        console.log("req.user:", req.user);
        res.status(200)
        res.json(req.user)
        res.redirect('/FAQ/admin')
    })
}

const logout = (req, res) => {
    req.logout();
    console.log("logged out user");
    res.sendStatus(200);
}

const authorize = ((req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect("/admin/login")
    }
})

module.exports = {
    login,
    logout,
    authorize,
    necessaryforroutes
}