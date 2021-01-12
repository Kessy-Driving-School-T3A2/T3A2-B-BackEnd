const review = {
    "_id" : 1,
    "name": "Ivan Malat",
    "review": "a nice man who likes to show people the outback"
}

test('getReviews to not be null', () => {
    const getReviews = function (req, res) {
        const getAllReviews = function (req) {
            return review.find()
        }
        getAllReviews(req).
        exec((err, reviews) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(reviews)
        })
    }
    expect(getReviews).toBeDefined()
})

test('getReviews will send reviews', () => {
    const getReviews = function (req, res) {
        const getAllReviews = function (req) {
            return review.find()
        }
        getAllReviews(req).
        exec((err, reviews) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(reviews)
        })
        expect(reviews).toBe({
            "_id" : 1,
            "name": "Ivan Malat",
            "review": "a nice man who likes to show people the outback"
        })
    }
})

test('getReviews will not send res.status 500', () => {
    const getReviews = function (req, res) {
        const getAllReviews = function (req) {
            return review.find()
        }
        getAllReviews(req).
        exec((err, reviews) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(reviews)
            expect(res.status).not.toBe(500)
        })
    }
})

test('expect makeReview to be defined', () => {
    const makeReview = function (req, res) {
        function createReview(req) {
            return new review({
                "_id": 2,
                "name": "Ed Gein",
                "review": "Man is a total mothers boy"
            })
        }
        createReview(req).save((err, review) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.status(201);
            res.send(review);
        })
    }
    expect(makeReview).toBeDefined()
})

test('makeReview will send a new review to the database', () => {
    const makeReview = function (req, res) {
        function createReview(req) {
            return new review({
                "_id": 2,
                "name": "Ed Gein",
                "review": "Man is a total mothers boy"
            })
        }
        createReview(req).save((err, review) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.status(201);
            res.send(review);
        })
        expect(review).toBe({
            "_id": 2,
            "name" : "Ed Gein",
            "review": "Man is a total mothers boy"
        })
    }
})

test('makeReview will not return an error status of 500', () => {
    const makeReview = function (req, res) {
        function createReview(req) {
            return new review({
                "_id": 2,
                "name": "Ed Gein",
                "review": "Man is a total mothers boy"
            })
        }
        createReview(req).save((err, review) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.status(201);
            res.send(review);
        })
        expect(res.status).not.toBe(500)
    }
})

test('removeReview will be defined', () => {
    const removeReview = function(req, res) {
        const deleteReview = function(req) {
            return review.deleteOne()
        }
        deleteReview(req).exec((err, faq) => {
            if (err) {
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            res.send(review)
        })
        expect(removeReview).toBeDefined()
    }
})

test('expect removeReview to delete the dummy data', () => {
    const removeReview = function(req, res) {
        const deleteReview = function(req) {
            return review.deleteOne()
        }
        deleteReview(req).exec((err, faq) => {
            if (err) {
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            res.send(review)
        })
        expect(review).toBe(null)
    }
})

test('expect removeReview to NOT return a res.status of 500', () => {
    const removeReview = function(req, res) {
        const deleteReview = function(req) {
            return review.deleteOne()
        }
        deleteReview(req).exec((err, faq) => {
            if (err) {
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            res.send(review)
        })
        expect(res.status).not.toBe(500)
    }
})

const review2 = [{
    "_id": 1,
    "name": "name1",
    "review": "name1 may infact be superiour to name2"
},
{
    "_id": 2,
    "name": "name2",
    "review": "feels inferior to name 1"
}]

test("expect removeReview to not delete all reviews just one", () => {
    const removeReview = function(req, res) {
        const deleteReview = function(req) {
            return review2.deleteOne(_id === 2)
        }
        deleteReview(req).exec((err, faq) => {
            if (err) {
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            res.send(review2)
        })
        expect(review2).toBe({ 
            "_id": 1,
        "name": "name1",
        "review": "name1 may infact be superiour to name2"
    })
    }
})