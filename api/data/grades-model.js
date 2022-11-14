const mongoose = require("mongoose")

const scoreSchema=mongoose.Schema({
    type:String,
    score:Number
});

const gradeSchema=mongoose.Schema({
    student_id:Number
    ,scores:[scoreSchema]
});

mongoose.model(process.env.GRADE_MODEL_NAME,gradeSchema,process.env.GRADE_COLLECTION_NAME);