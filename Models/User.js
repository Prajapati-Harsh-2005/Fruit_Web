var mongoose = require('mongoose');
const {Schema} = mongoose;

const user = new Schema({
    user_strawberry: String,
    user_apple: String,
    user_cap: String,
    user_lemons: String,
    user_kumato: String,
    user_cherry: String,
    user_capsicums: String,
    user_banana: String,
    user_pears: String,
    user_pomegranate: String,
    user_cauliflower: String,
    user_corn: String,
});
var user_info = mongoose.model('User', user);
module.exports = user_info;
