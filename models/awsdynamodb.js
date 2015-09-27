/**
 * AWS DynamoDB Database connection and CRUD operations.
 * 
 * Author : Vinod Kumar Verma
 * 
 * Date : 10/04/2015
 */

//loading AWS SDK for DynamoDB
var AWS = require('aws-sdk')
//var AWS = require('dynamoDB')

//Connection of DynamoDB with keys.
AWS.config.update({
	"accessKeyId" : "AKIAIXC2GI4GIAZJXMBA",
	"secretAccessKey" : "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",
	"region" : "us-east-1"
})


var db = new AWS.DynamoDB();
/*db.listTables(function(err, data) {
  console.log(data.TableNames);
});*/

// You can read your credentials from a local file.
/*var credentials = {AccessKeyId : "AKIAIXC2GI4GIAZJXMBA", 
                   SecretKey   : "pB7SjFbnI2aXFL6uNwrjHI9OGsylF8oMgy4wEjJQ",
                   "region" : "us-east-1"}; 
var awsdb = require('dynamoDB').DynamoDB(credentials);
*/

//connection local DB	  
/*awsdb = new AWS.DynamoDB({
	endpoint : new AWS.Endpoint('http://localhost:8000')
});*/

//Get list of tables
db.listTables(function(err, data) {
	console.log('listTables', err, data);
});


//var tableName = 'userinfo';

/*awsdb.listTables({}, function(response,result) {
    response.on('data', function(chunk){
        console.log(""+chunk);
    });
    result.on('ready', function(data){
        console.log("Error:" + data.error);
        console.log("ConsumedCapacityUnits:" + data.ConsumedCapacityUnits);
        // ...
    });
});


awsdb.putItem(
{
     "TableName":"userinfo",
        "Item":{
            "userid":{"S":"104"},
           "username":{"S":"fancy vase"},
           "emaiid":{"S":"2fancy@g.com"},
        "password":{"S":"Kumar"},
        "sex":{"S":"male"}
        
       }
  }, function(response,result) {
	    response.on('data', function(chunk){
	        console.log(""+chunk);
	    });
	    result.on('ready', function(data){
	        console.log("Error:" + data.error);
	        console.log("ConsumedCapacityUnits:" + data.ConsumedCapacityUnits);
	        // ...
	    });
	});




awsdb.describeTable({"TableName":"userinfo"}, function(response,result) {
    response.on('data', function(chunk){
        console.log(""+chunk);
    });
    result.on('ready', function(data){
        console.log("Error:" + data.error);
        console.log("ConsumedCapacityUnits:" + data.ConsumedCapacityUnits);
        // ...
    });
});*/

//create table, update the values for create operations.
/*awsdb.createTable({
	TableName : 'myTb2',
	AttributeDefinitions : [ {
		AttributeName : 'id',
		AttributeType : '2'
	}, ],
	KeySchema : [ {
		AttributeName : 'gjgfd',
		KeyType : 'HASH'
	} ],
	ProvisionedThroughput : {
		ReadCapacityUnits : 1,
		WriteCapacityUnits : 1
	},
 }, function(err, data) {
	if (err)
		console.log(err, err.stack); // an error occurred
	else {
		awsdb.listTables(function(err, data) {
			console.log(data)
		});
	}
 });*/