const {Schema, model} = require('mongoose');

//schema itself
const schema = new Schema({
    name: String,
    dateCreated: { type: Date, default: Date.now },
    comments: [{ title: String, content: String, viewCount: Number, isPremium: Boolean }],
    meta: {
        votes: Number,
        favs:  Number
    }
});

//add custom methods
schema.methods.speak = function speak () {
    if(this.name)
        console.log(this.name + " cat");
    else
        console.log("Anonymous cat");
}

module.exports = model('Cat', schema);