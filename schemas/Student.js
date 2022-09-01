const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    id:String,
    name:String,
    collegeId:String,
    skills:String,
    year_of_batch:String,
}, { collection : 'students' })

const Students = mongoose.model("students",StudentSchema)

module.exports = Students