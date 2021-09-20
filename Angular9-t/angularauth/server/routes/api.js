const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const db = "mongodb://localhost:27017/authdb"

mongoose.connect(db, err=>{
    if(err){
        console.log('Error!'+err)
    }
    else{
        console.log('Connected to MongoDB')
    }
})

//middleware function
function verifyToken(req, res, next){
  if(!req.headers.authorization){
    return res.status(401).send('Unauthorized Request')
  }
  else{
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
      return res.status(401).send('Unauthorized Request')
    }
    else{
      let payload = jwt.verify(token, 'secretKey')
      if(!payload){
        return res.status(401).send('Unauthorized Request')
      }
      else{
        req.userId = payload.subject
        next()
      }
    }
  }
}

// localhost:3000/api === /
router.get('/', (req, res)=>{
    res.send('From Api route')
})


//REGISTER
router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error)
        }
        else{
            let payload = {subject:registeredUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

//Login API
router.post('/login', (req,res) => {
    let userData = req.body

    //Mongoose Function
    User.findOne({email:userData.email}, (error, user)=>{
        if(error){
            console.log(error);
        }
        else
        {
            //case 1
            if(!user){
                res.status(401).send("Invalid email");
            }else{
                if(user.password !== userData.password){
                    res.status(401).send("Invalid password");
                }
                else{
                    let payload = {subject:user._id}
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({token})
                    // res.status(200).send(user)
                }
            }
        }

    })
})

router.get('/events', (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]
    res.json(events)
})


router.get('/special', verifyToken, (req, res)=>{
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          },
          {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
          }
    ]
    res.json(events)
})


module.exports = router
