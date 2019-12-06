const {Number} = require('./models/calculator');

// Testing Numbers
module.exports.absolute = function(number) {
    return (number >= 0) ? number : - number; 
};