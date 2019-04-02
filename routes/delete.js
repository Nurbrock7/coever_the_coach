// Get before you delete

var express = require('express');
var router = express.Router();
var Post = require("../db.json");

router.get ('/', function (req,res,next) {
    console.log (req.params,postId);

    // make a post request to our Database

    request ({
        url: 'http://localhost3004/posts' + req.params,postId,
        method : 'DELETE',

    },

    function(error,response,body) {
        var data ={
            title:"football",
            posts: Post ,
            messsage : "successfully deleted"
          };

          res.redirect('..');
    });
});