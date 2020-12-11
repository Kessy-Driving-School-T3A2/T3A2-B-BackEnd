const faq = {
    "_id" : 1,
    "question": "why is the rum gone",
    "answer": "definitively because someone drank it"
}

test('getFaqs to not be null', () => {
    const getFaqs = function (req, res) {
    const getAllFaqs = function (req) {
        return faq.find()
    };
    getAllFaqs(req).
    exec((err, faqs) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
              });
            }
            res.send(faqs);
        });
    };
    expect(getFaqs).toBeDefined()     
    })

test('getFaqs will send faqs', () => {
    const getFaqs = function (req, res) {
        const getAllFaqs = function (req) {
            return faq.find()
          };
    
        getAllFaqs(req).
            exec((err, faqs) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
            res.send(faqs);
          });
          expect(faqs).toBe({
            "_id" : 1,
            "question": "why is the rum gone",
            "answer": "definitively because someone drank it"
        })
      };
})

test('getFaqs will Not send res.status 500', () => {
    const getFaqs = function (req, res) {
        const getAllFaqs = function (req) {
            return faq.find()
          };
    
        getAllFaqs(req).
            exec((err, faqs) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
            res.send(faqs);
            expect(res.status).not.toBe(500)
          });
      };
})

test('expect make Faq to be defined', () => {
    const makeFaq = function (req, res) {
        function createFAQ(req){
            return new faq({
                "_id" : 2,
                "question": "what gets wetter as it drys?",
                "answer": "a towel"
            });
          }
    
          createFAQ(req).save((err, faq) => {
          if (err) {
            res.status(500);
            return res.json({
              error: err.message
            });
          }
          res.status(201);
          res.send(faq);
        });
      };
      expect(makeFaq).toBeDefined()
})

test('makeFaq will send a new faq to the database', () => {
    const makeFaq = function (req, res) {
        function createFAQ(req){
            return new faq({
                "_id" : 2,
                "question": "what gets wetter as it drys?",
                "answer": "a towel"
            });
          }
    
          createFAQ(req).save((err, faq) => {
          if (err) {
            res.status(500);
            return res.json({
              error: err.message
            });
          }
          res.status(201);
          res.send(faq);
        });
        expect(faq).toBe({
            "_id" : 2,
            "question": "what gets wetter as it drys?",
            "answer": "a towel"
        })
      };
})

test('makeFaq will not return an error status of 500', () => {
    const makeFaq = function (req, res) {
        function createFAQ(req){
            return new faq(req.body);
          }
    
          createFAQ(req).save((err, faq) => {
          if (err) {
            res.status(500);
            return res.json({
              error: err.message
            });
          }
          res.status(201);
          res.send(faq);
        });
        expect(res.status).not.toBe(500)
    };
})

test('editFaq will be defined', () => {
    const editFaq = function(req, res) {
        const updateFaq = function(req) {
            return faq.update({
                "_id": 2,
                "question":"answer",
                "answer":"question"
            })
        };
        
        updateFaq(req).exec((err, faq) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(faq)
        }
        )
    }
    expect(editFaq).toBeDefined()
})

test('editFaq will edit the faq in dummy data', () => {
    const editFaq = function(req, res) {
        const updateFaq = function(req) {
            return faq.update({
                "_id": 2,
                "question":"answer",
                "answer":"question"
            })
        };
        
        updateFaq(req).exec((err, faq) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(faq)
        })
        expect(faq).toBe({
            "_id": 2,
            "question": "answer",
            "answer":"question"
        })
    }
})

test('expect updateFaq will NOT return a res.status of 500', () => {
    const editFaq = function(req, res) {
        const updateFaq = function(req) {
            return faq.update({
                "_id": 2,
                "question":"answer",
                "answer":"question"
            })
        };
        
        updateFaq(req).exec((err, faq) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(faq)
        })
        expect(res.status).not.toBe(500)
    }
})

test('expect removeFaq will be defined', () => {
    const removeFaq = function(req, res) {
        const deleteFaq = function(req) {
          return faq.deleteOne()
        }
      
        deleteFaq(req).exec((err, faq) => {
          if (err) {
            res.status(500)
            return res.json({
              error: err.message
            });
          }
          res.send(faq)
        })
        expect(removeFaq).toBeDefined()
      }
      
})

test('expect removeFaq to delete the dummy data', () => {
    const removeFaq = function(req, res) {
        const deleteFaq = function(req) {
          return faq.deleteOne()
        }
      
        deleteFaq(req).exec((err, faq) => {
          if (err) {
            res.status(500)
            return res.json({
              error: err.message
            });
          }
          res.send(faq)
        })
        expect(faq).toBe(null)
      }
})

test('expect removeFaq to NOT return a res.status of 500', () => {
    const removeFaq = function(req, res) {
        const deleteFaq = function(req) {
          return faq.deleteOne(req)
        }
      
        deleteFaq(req).exec((err, faq) => {
          if (err) {
            res.status(500)
            return res.json({
              error: err.message
            });
          }
          res.send(faq)
        })
        expect(res.status).not.toBe(500)
      }    
})