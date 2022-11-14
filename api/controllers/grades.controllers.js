const mongoose=require('mongoose');

const Grade=mongoose.model(process.env.GRADE_MODEL_NAME);

module.exports.getOne=function(req,res){
    const gradeId=req.params.gradeId;
    if (!mongoose.isValidObjectId(gradeId)) {
        res.status(400).json('not valid id');
        return;
    }
    Grade.findById(gradeId).exec(function(err,grade){
        const response={status:200, message:grade}
        if (err) {
            response.status=500;
            response.message="Internal server error"
            
        }else if (!grade){
            response.status=400;
            response.message="grade id not found"
        }
        res.status(response.status).json(response.message);
    });
}
module.exports.deleteOne=function(req,res){
    const gradeId=req.params.gradeId;
    if (!mongoose.isValidObjectId(gradeId)) {
        res.status(400).json('not valid id');
        return;
    }
    Grade.findByIdAndDelete(gradeId).exec(function(err,grade){
        const response={status:200, message:grade}
        if (err) {
            response.status=500;
            response.message="Internal server error"
            
        }else if (!grade){
            response.status=400;
            response.message="grade id not found"
        }
        res.status(response.status).json(response.message);
    });
}
module.exports.getAll=function(req,res){
    let offset=0;
    let count=5;
    if (req.query && req.query.offset) {
        offet=req.query.offset;
    }
    if (req.query && req.query.count) {
    count=req.query.count;
    }
    Grade.find().skip(offset).limit(count).exec(function(err,grades){
        if (err) {
            res.status(500).json("Internl server error");
        }else{
            res.status(200).json(grades);
        }
    });    
}