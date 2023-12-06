const mongoose = require('mongoose');

const workSchema = ({
    lien: {type: String, required: true},
    images: {type: String, required: true},
    titres: {type: String, required: true},
    taches: {type: String, required: true},
    langages: {type: String, required: true},
    liencode: {type: String, required: true},
    contraintes: {type: String, required: true}
})

const Work = mongoose.model('Work',workSchema)

module.exports = {Work}