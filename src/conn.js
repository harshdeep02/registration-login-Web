const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/websiteRegistration",{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>{
    console.log("Connect Sucessfully")
})
.catch(()=>{
    console.log("connection Failed")
})