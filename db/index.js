const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/DnDIdeas`, {useNewUrlParser: true, useUnifiedTopology: true });

const ideas = new mongoose.Schema({
    Boss: String,
    Motive: String,
    World: String
});

module.exports = mongoose.model("ideas", ideas);