/**
 * This www.js describes about the creating and listening to server at port 8080.
 * 
 * @Author: Vinod Verma
 * @Version : 1.0.0
 * @Date : 10-04-2015
 * 
 */

var app = require('../app');

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
