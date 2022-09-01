const mongoose = require('mongoose')

const CollegeSchema = new mongoose.Schema({
    name:String,
    no_of_student:String,
    courses:String,
    city:String,
    country:String,
    state:String,
    year_founded:String,
    year_founded:Number,
}, { collection : 'colleges' })

const Colleges = mongoose.model("colleges",CollegeSchema)

module.exports = Colleges