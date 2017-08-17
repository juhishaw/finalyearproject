var express = require('express');
var bloge = express.Router();
var mongoose = require('mongoose');
var blog = require('../models/post')
var jwt    = require('jsonwebtoken'); 
var superSecret = require('../config')




bloge.post('/blog', function(req, res) {
    console.log(__filename, req.body.title)

  if (req.body.title && req.body.text && req.body.categ) {
    var newBlog = new blog({
     
      title : req.body.title,
      text : req.body.text,
      categ : req.body.categ
    })

    newBlog.save(function(err, data) {
      if (err) {
        res.json({ success: false })
      }
      res.json({
        success: true,
        data: data
      })
    })
  } else {
    res.json({
      success: false,
      msg: "No data entered"
    })
  }

});


bloge.post('/getblog',function(req,res){
    blog.find({categ:req.body.categ},function(err,blogs){
        if(err){
            res.status(500).send({
                status:false,
                error:err
            })
        }else{
            res.send({
                status:true,
                blogs:blogs
            })
        }
    })
})

module.exports = bloge;