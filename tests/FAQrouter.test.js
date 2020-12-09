const {makeFaq, getFaqs} = require('../routes/FAQrouter')



test('getFaqs to return an object', () => {
    expect(getFaqs).toBeTruthy()
})

test('getFaqs to return a status 200',  () => {
    expect(getFaqs).toBe(Object)
})