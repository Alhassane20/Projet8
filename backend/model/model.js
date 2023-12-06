const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    lien: String,
    image: String,
    titre: String,
    taches: [String],
    langages: String,
    lienCode: String,
    contraintes: String,
})

const Work = mongoose.model('Work',workSchema);

module.exports = {Work}