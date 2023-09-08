const express = require('express');
const app = express();
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000;

require("./src/conn")
const Register = require("./src/models/model")
app.use(express.urlencoded({extended:false}))

const static_path = path.join(__dirname, "./static") //set directory
const views_path = path.join(__dirname, "./templates/views") //set directory
const partial_path = path.join(__dirname, "./templates/partials")//set directory


app.use("/static", express.static(static_path))
app.set("view engine", "hbs")
app.set("views", views_path)
hbs.registerPartials(partial_path)

app.get("/", (req, res)=>{
    res.render("register")
})
app.get("/logIn", (req, res)=>{
    res.render("login")
})
app.post("/",async(req, res)=>{
    const myData =  new Register(req.body)
    const password = myData.password
    const confirmPassword = myData.confirmPassword
    if(password === confirmPassword){
             myData.save().then(()=>{
            res.status(200).render("register")
        })
}
    else{
        res.status(400).send("Invalid email or password")
    }
})

app.post("/logIn", async(req, res)=>{
    try {
        const email = req.body.email
        const password = req.body.password

        const data = await Register.findOne({email:email})
        if(data.password === password){
            res.status(201).render("loginPage")
        }
        else{
            res.status(400).send("Invalid login details")
        }
    } catch (error) {
        res.status(400).send("Invalid login details")
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})
