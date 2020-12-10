const express = require('express');
const router = express.Router();

//all will need connection to front end for views :)

test('home router will exist', () => {
const home = router.get('/', function(req,res,next) {
    if (err) {
        res.status(500)
        console.log(err)
    }
    res.status(201)
    res.send()
})
    expect(home).toBeDefined() 
})

test('Home route will have a res.status of 201', () => {
    const home = router.get('/', function(req,res,next) {
    if (err) {
        res.status(500)
        console.log(err)
    }
    res.status(201)
    res.send()
    expect(res.status).toBe(201)
})
})

test('Home route will NOT have a res.status of 500', () => {
    const home = router.get('/', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).not.toBe(500)
    })
})

test('About Us exists', () => {
    const aboutus = router.get('/aboutus', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
   
})
    expect(aboutus).toBeDefined()
})


test('About Us route will have a res.status of 201', () => {
    const aboutus = router.get('/aboutus', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).toBe(201)
})
})

test('About Us route will NOT have a res status of 500', () => {
    const aboutus = router.get('/aboutus', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).not.toBe(500)
})
})

test('shows contact us exists', () => {
 const contactus = router.get('/contactus', function(req,res,next) {
    if (err) {
        res.status(500)
        console.log(err)
    }
    res.status(201)
    res.send()
})
    expect(contactus).toBeDefined()
})

test('contact us will return res.status of 201', () => {
router.get('/contactus', function(req,res,next) {
    if (err) {
        res.status(500)
        console.log(err)
    }
    res.status(201)
    res.send()
    expect(res.status).toBe(201)
})})

test('contact us will not return res.status of 500', () => {
    router.get('/contactus', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).not.toBe()
    })
})

test('reviews route exists', () => {
    const reviews = router.get('/reviews', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
    }
    res.status(201)
    res.send()
})
    expect(reviews).toBeDefined()
})

test('reviews routes res.status is 201', () => {
    router.get('/reviews', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).toBe(201)
    })
})

test('reviews routes will NOT return res.status of 500', () => {
    router.get('/reviews', function(req,res,next) {
        if (err) {
            res.status(500)
            console.log(err)
        }
        res.status(201)
        res.send()
        expect(res.status).not.toBe(500)
    })
})
