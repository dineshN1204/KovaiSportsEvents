const express = require('express')
const bodyParser = require('body-parser')
const usersModel = require('../models-schemas/userschema')

const router = express.Router()
router.use(bodyParser.json())

router.get('/',(req,res)=>{
    res.send('Users Page')
})

router.post('/post',(req,res)=>{
    console.log(req.body)
    const newUser = new usersModel(req.body)
    newUser.save()
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Users post page')
})

router.get('/get',(req,res)=>{
    console.log(req.body);
    usersModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

router.get('/get/:id',(req,res)=>{
    usersModel.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

router.get('/getemail/:email',(req,res)=>{
    console.log(req.params.email)
    usersModel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})

module.exports = router