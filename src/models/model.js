const mongoose = require('mongoose')

const employeeScheme = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require : true,
        unique  : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String,
        required : true
    }
})


const Register = mongoose.model("Register", employeeScheme)

module.exports = Register