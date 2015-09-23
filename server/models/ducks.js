var mongoose = require('mongoose-q')(require('mongoose',{spread:true}));
var Schema = mongoose.Schema;

var duckSchema = new Schema({
  name: String,
  Age: Number
});


// "ducks" is the name of the collection
module.exports = mongoose.models('ducks', duckSchema);
