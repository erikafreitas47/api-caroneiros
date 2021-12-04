const mongoose = require("mongoose");

const caronaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    


})

module.exports = mongoose.model("carona", caronaSchema);
