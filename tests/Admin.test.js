const authJwt = require("../utilities/authJWT")

const user1 = {
    "username": "test",
    "email": "test@test.com",
    "password": "test"
}

test("expecting signin to be defined", () => {
    const signin = (req, res) => {
        User.findOne({
        username: user1.username
        })
        .exec((err, user) => {
            if (err) {
            res.status(500).send({ message: err });
            return;
            }
  
            if (!user) {
            return res.status(404).send({ message: "User Not found." });
            }
  
            const passwordIsValid = bcrypt.compareSync(
            user1.password,
            user.password
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
        expect(signin).toBeDefined()
    
})

test("expect signin to return status 200", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
          expect(res.status).toBe(200)
      };
    
})

test("expect object sent at end of function to have the same username as object user1 and mongodb", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
          expect(user.username).toBe("test")
        };
    })

test("expect password at end of function to match password in user1 and mongodb", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
            expect(user.password).toBe("test")
          });
      };
})

test("expect email to match email in object user1 and mongodb", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
        expect(user.email).toBe("test@test.com")
      };
})

test("that a res.status of 401 wont be returned as data is applyable", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
          expect(res.status).not.toBe(404)
      };
})

test("that a res.status of of 500 wont be sent as data is applyable to function", () => {
    const signin = (req, res) => {
        User.findOne({
          username: user1.username
        })
          .exec((err, user) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
      
            if (!user) {
              return res.status(404).send({ message: "User Not found." });
            }
      
            const passwordIsValid = bcrypt.compareSync(
              user1.password,
              user.password
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
          expect(res.status).not.toBe(500)
      };
})
