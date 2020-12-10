
const prices = {
    "_id": 2, 
    "price": 100003249802394230,
    "name": "asdsad",
    "upsert": true
}

test('that get prices is defined', () => {
    const getPrices = function (req, res) {
        const getAllPrices = function (req) {
            return prices.find()
          };
    
        getAllPrices(req).
            exec((err, prices) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
              res.send(prices);
          });
      };
      expect(getPrices).toBeDefined()
})

test('that get allprices is returning an object', () => {
    const getPrices = function (req, res) {
        const getAllPrices = function (req) {
            return prices.find()
          };
    
        getAllPrices(req).
            exec((err, prices) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
              res.send(prices);
        });
        expect(getAllPrices).toBe({
            "_id": 2, 
            "price": 100003249802394230,
            "name": "asdsad",
            "upsert": true
        })
    };
})

test('that getprices will send the prices from the DB', () => {
    const getPrices = function (req, res) {
        const getAllPrices = function (req) {
            return prices.find()
          };
    
        getAllPrices(req).
            exec((err, prices) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
              res.send(prices);
          });
          expect(res.send).toBe(prices)
      };
})

test('that getprices will NOT return a res.status of 500', () => {
    const getPrices = function (req, res) {
        const getAllPrices = function (req) {
            return prices.find()
          };
    
        getAllPrices(req).
            exec((err, prices) => {
              if (err) {
                  res.status(500);
                  return res.json({
                      error: err.message
                  });
              }
              res.send(prices);
          });
          expect(res.status).not.toBe(500)
      };
})

test('that updateprices is defined', () => {
    const editPrices = function(req, res) {
        const updatePrices = function(req) {
            return prices.update()
        };
        
        updatePrices(req).exec((err, prices) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(prices)
        }
        )
    }
    expect(editPrices).toBeDefined()
})

test('that dummy data will be passed into prices.update and work', () => {
    const editPrices = function(req, res) {
        const updatePrices = function(req) {
            return prices.update({
                "_id": 3, 
                "price": 69,
                "name": "Bez",
                "upsert": true
            })
        };
        
        updatePrices(req).exec((err, prices) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(prices)
        }
        )
        expect(prices).toBe({
            "_id": 3, 
            "price": 69,
            "name": "Bez",
            "upsert": true
        })
    }
})

test('that the dummy data will not error out', () => {
    const editPrices = function(req, res) {
        const updatePrices = function(req) {
            return prices.update({
                "_id": 3, 
                "price": 69,
                "name": "Bez",
                "upsert": true
            })
        };
        
        updatePrices(req).exec((err, prices) => {
            if (err) {
                res.status(500);
                return res.json({
                    error: err.message
                });
            }
            res.send(prices)
        }
        )
        expect(updatePrices(req).exec).not.toBe(err)
    }
})