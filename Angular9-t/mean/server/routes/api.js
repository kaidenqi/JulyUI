const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Video = require('../models/video')

//connect
const db = "mongodb://localhost:27017/videos"
mongoose.connect(db, function(err){
    if(err){
        console.error('Error:'+ err)
    }
    else{
        console.log("Mongodb Connected")
    }
})

//get all videos
router.get('/videos', function(req, res){
    console.log("Get request for all Videos")
    Video.find({})
        .exec(function(err, videos){
            if(err){
                console.error('Error retrieving the videos')
            }
            else{
               res.json(videos)
            } 
        })
})

//get a video by id
router.get('/videos/:id', function(req, res){
    console.log("Get request for a Video")
    Video.findById(req.params.id)
        .exec(function(err, video){
            if(err){
                console.error('Error retrieving the video')
            }
            else{
               res.json(video)
            } 
        })
})

//post a video
router.post('/video',function(req, res){
    console.log("Post a video");

    let newVideo = new Video();

    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;

    newVideo.save(function(err, insertedVideo){
        if(err){
            console.error('Error saving the video')
        }
        else{
            res.json(insertedVideo)
        }
    })
})

//Updating a video
router.put('/video/:id', function(req, res){
    console.log('Updating a Video')
    Video.findByIdAndUpdate(req.params.id,
        {
            $set:{title: req.body.title, url: req.body.url, description: req.body.description}
        },{
            new:true
        },
        function(err, updatedVideo){
            if(err){
                console.error('Error saving the video')
            }
            else{
                res.json(updatedVideo)
            } 
        }
    )
});
//Delete a document
router.delete('video/:id', function(req, res){
    console.log('Deleting a Video')
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            console.error('Error deleting a video')
        }
        else{
            res.json(deletedVideo)
        } 
    })
})


module.exports = router;