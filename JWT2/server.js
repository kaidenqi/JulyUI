
require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
    {
        username:"Kai",
        title:"Post 1"
    },
    {
        username:"Qi",
        title:"Post 2"
    }
];

app.get('/posts', authenticateToken, (req,res)=>{
    res.json(posts.filter(post => post.username === req.user.name))
})

//middleware to authenticate the token
function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user)=>{
        if(err) res.sendStatus(403);
        req.user = user;
        next();
    })
 
}

app.listen(3000);