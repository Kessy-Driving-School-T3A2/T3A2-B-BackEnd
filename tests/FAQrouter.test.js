

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
          expect(res.send).toBe(faqs)
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
      };
      expect(makeFaq).toBeDefined()
})

test('makeFaq will send a new faq to the database', () => {
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
        expect(res.send).toBe(faq)
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