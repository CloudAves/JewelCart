/**
 * This sWatchModel.js describes about the mapping with table.
 * 
 * @Author: Vinod Verma
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var sWatchSchema=new Schema({
    firstName:'String',
    lastName:'String',
    email:'String',
    password:'String',
    sex:'String',
    mobile:'String',
    location:'String'
});

module.exports=mongoose.model('sWatchModel',sWatchSchema);
