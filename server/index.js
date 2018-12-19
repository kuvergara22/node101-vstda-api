var app = require('./app');

// write your code here

var server= app.listen(8484, () => {
    console.log('server is listening on 8484');
});