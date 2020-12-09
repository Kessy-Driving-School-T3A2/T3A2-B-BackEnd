const faq = require("../models/FAQ")
const mongoose = require("mongoose")

const createFAQ = (data) => {
    const data2 = new faq(data)

      data2.save((err) => {
      if (err) console.log(err)
      console.log("saved")
    });

  }

createFAQ({question: "this is not a question, it is a statement", answer: "oi mate"})
//const shit = faq.find({}).then(console.log())
// const shit = faq.find()
// if (shit) {
//   console.log("inside the exec")
//   shit.exec((err, shit) => console.log(shit))
// }
// else{
// console.log("not the post")
// }
