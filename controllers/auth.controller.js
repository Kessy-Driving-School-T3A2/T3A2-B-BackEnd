const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
    User.findOne({
      username: req.body.username
    })
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        // password is hashed here because having created the user through mongo
        // and not through this JWT auth, password isnt hashed
        let hash = bcrypt.hashSync(user.password, 10)

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          hash
        );
        
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          accessToken: token
        });
      });
  };

// "a middleware function that exists because routes demands it")
exports.hangout = (req, res) => {
  res.send()
}
  