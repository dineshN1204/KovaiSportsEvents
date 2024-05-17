const express = require('express')
const bodyParser = require('body-parser')
const EventModel = require('../models-schemas/eventschema')
const router = express.Router()
router.use(bodyParser.json())
//Home Router
router.get('/',(req,res)=>{
    res.send('Events Page')
})
//Post Router
router.post('/post',(req,res)=>{
    console.log(req.body)
    const newEvents = new EventModel(req.body)
    newEvents.save()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
//Get Router
router.get('/get',(req,res)=>{
    EventModel.find()
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
//Get Router with id
router.get('/get/:id',(req,res)=>{
    console.log(req.params.id)
    EventModel.findById(req.params.id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
//Put Router(Update)
router.put('/update/:id',(req,res)=>{
    console.log(req.params.id,req.body);
    EventModel.findByIdAndUpdate(req.params.id,req.body)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
})
//Delete Router
router.delete('/delete/:id',(req,res)=>{
    console.log(req.params.id)
    EventModel.findByIdAndDelete(req.params.id)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
    res.send('Event deleted')
})

module.exports = router