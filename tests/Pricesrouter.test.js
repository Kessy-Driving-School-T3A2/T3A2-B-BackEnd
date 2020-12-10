
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
        )}})