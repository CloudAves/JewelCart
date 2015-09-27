/**
 * This sWatchRoute.js describes about the REST API urls and endpoints.
 * 
 * @Author: Vinod Verma
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */


var sWatchModel=require('../models/sWatchModel');
var pedoModel=require('../models/pedoModel');
//var sWatchModel=require('../models/awsdynamodb');


var express=require('express');

// configure routes
var router=express.Router();

router.route('/sWatchRoute').get(function(req,res){
	res.header("Content-Type", "application/json; charset=utf-8");
       sWatchModel.find(function(err,sWatchRoute){
    	  
           if(err){
        	   res.send(err);
        	   }
           console.log("Get all response::::", sWatchRoute);
           res.json(sWatchRoute);
       });
    })

    .post(function(req,res){
    	
    	req.header("Content-Type", "application/json; charset=utf-8");
    	
        /*
		 * var movie=new sWatchModel(req.body); console.log("Data saved",
		 * movie);
		 */
    	console.log("Request Body content",req.body);
        var userDetail = new sWatchModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            sex: req.body.sex,
            mobile: req.body.mobile,
            location: req.body.location
            
        });
        console.log("Request Body firstName",req.body.firstName);
        console.log("Data saved ::::", userDetail);
        userDetail.save(function(err){
            if(err){
            	 res.send(err);
            }
            res.send({message:'userDetail Added'});
        });
    });

router.route('/sWatchRoute/:id')
    .put(function(req,res){
        sWatchModel.findOne({_id:req.params.id},function(err,userDetail){

            if(err)
                res.send(err);

           for(prop in req.body){
        	   userDetail[prop]=req.body[prop];
           }

            // save the userDetail
           userDetail.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'userDetail updated!' });
            });

        });
    })

    .get(function(req,res){
        sWatchModel.findOne({_id:req.params.id},function(err, userDetail) {
            if(err)
                res.send(err);

            res.json(userDetail);
        });
    });

    router.route('/sWatchRoute/:id').delete(function(req,res){
        sWatchModel.remove({
            _id: req.params.id
        }, function(err, userDetail) {
            if (err)
                res.send(err);

            res.json({ message: 'userDetail Successfully deleted' });
        });
    });

    
    //Pedometer data 
    
    router.route('/getPedoData').get(function(req,res){
    	res.header("Content-Type", "application/json; charset=utf-8");
    	pedoModel.find(function(err,sWatchRoute){
        	  
               if(err){
            	   res.send(err);
            	   }
               console.log("Get all response::::", sWatchRoute);
               res.json(sWatchRoute);
           });
        });
        
       router.route('/postPedoData').post(function(req,res){
    	
    	req.header("Content-Type", "application/json; charset=utf-8");
    	     
    	console.log("Request Body content",req.body);
        var pedo = new pedoModel({
        	day: req.body.day,
            steps: req.body.steps
            
        });
        console.log("Request Body day",req.body.day);
        console.log("Data saved ::::", pedo);
        pedo.save(function(err){
            if(err){
            	 res.send(err);
            }
            res.send({message:'pedoModel Added'});
        });
    });
       
       
     //Device Registration REST API data 
       
       router.route('/getDeviceData').get(function(req,res){
       	res.header("Content-Type", "application/json; charset=utf-8");
       	deviceModel.find(function(err,sWatchRoute){
           	  
                  if(err){
               	   res.send(err);
               	   }
                  console.log("Get all response::::", sWatchRoute);
                  res.json(sWatchRoute);
              });
           });
           
          router.route('/postDeviceData').post(function(req,res){
       	
       	req.header("Content-Type", "application/json; charset=utf-8");
       	     
       	console.log("Request Body content",req.body);
           var pedo = new pedoModel({
           	day: req.body.day,
               steps: req.body.steps
               
           });
           console.log("Request Body day",req.body.day);
           console.log("Data saved ::::", pedo);
           pedo.save(function(err){
               if(err){
               	 res.send(err);
               }
               res.send({message:'pedoModel Added'});
           });
       });
       
module.exports=router;
