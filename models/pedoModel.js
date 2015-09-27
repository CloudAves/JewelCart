/**
 * This pedoModel.js describes about the mapping with table.
 * 
 * @Author: Vinod Verma
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var pedodata = new Schema({
    day:'String',
    steps:'String'
});

module.exports=mongoose.model('pedoModel',pedodata);
