/**
 * This deviceModel.js describes about the mapping with table.
 * 
 * @Author: Vinod Verma
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var devicedata = new Schema({
    deviceId:'String',
    deviceName:'String',
    deviceModel:'String',
    deviceOS:'String',
    deviceBrand:'String',
    deviceIMEI:'String'
});

module.exports=mongoose.model('deviceModel',devicedata);
