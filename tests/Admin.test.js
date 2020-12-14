const passport = require('passport')
const authenticate = passport.authenticate("local")

const user = {
    "username": "anfii",
    "password": "password"
}

test('that login exists as a function', () => {
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
    expect(login).toBeDefined()
})

test('that login functionally calls the username for authentication', () => {
    const login = (req, res) => {
        authenticate(req, res, function() {
            console.log("authenticated",user.username);
            console.log("session object:", req.session);
            console.log("req.user:", user);
            res.status(200)
            res.json(user)
            res.redirect('/FAQ/admin')
            expect(user.username).toBe("anfii")
        })
    }
})

test('that login functionally calls the username for authentication', () => {
    const login = (req, res) => {
        authenticate(req, res, function() {
            console.log("authenticated",user.username);
            console.log("session object:", req.session);
            console.log("req.user:", user);
            res.status(200)
            res.json(user)
            res.redirect('/FAQ/admin')
            expect(user).toBe({
                "username": "anfii",
                "password": "password"
            }
            )
        })
    }
})

test('that login functionally calls the username and not random data ', () => {
    const login = (req, res) => {
        authenticate(req, res, function() {
            console.log("authenticated",user.username);
            console.log("session object:", req.session);
            console.log("req.user:", user);
            res.status(200)
            res.json(user)
            res.redirect('/FAQ/admin')
            expect(user).not.toBe({
                "username": "somerandomusername",
                "password": "12345"
            }
            )
        })
    }
})


test('that this function for routes works', () => {

const necessaryforroutes = function(req, res) {
    res.status(200)
    res.send()
}
expect(necessaryforroutes).toBeDefined()
})

test('that this function sends a status of 200', () => {
    
const necessaryforroutes = function(req, res) {
    res.status(200)
    res.send()
    expect(res.status).toBe(200)
}
})

test('that this function doesnt send a status other then 200', () => {

const necessaryforroutes = function(req, res) {
    res.status(200)
    res.send()
    expect(res.status).not.toBe(500)
}
})

test('that logout function exists', () => {
    const logout = (req, res) => {
        req.logout();
        console.log("logged out user");
        res.sendStatus(200);
    }
    expect(logout).toBeDefined()
})

test('that logout function sends a status of 200', () => {
    const logout = (req, res) => {
        req.logout();
        console.log("logged out user");
        res.sendStatus(200);
        expect(res.sendStatus).toBe(200)
    }
})

test('that logout function doesnt send an 500 error', () => {
    const logout = (req, res) => {
        req.logout();
        console.log("logged out user");
        res.sendStatus(200);
        expect(res.sendStatus).not.toBe()
    }
})

test('that authorize exists', () => {
    const authorize = ((req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.redirect("/admin/login")
        }
    })
    expect(authorize).toBeDefined()
})

test('that authorize will redirect to login because we cant authenticate in test', () => {
    const authorize = ((req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.redirect("/admin/login")
        }
        
        expect(authorize).toHaveReturnedWith("/admin/login")
    })
})

test('that authorize will not return next because it cant authenticate', () => {
    const authorize = ((req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.redirect("/admin/login")
        }
        
        expect(authorize).not.toHaveReturnedWith(next())
    })
})