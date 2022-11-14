const express=require("express");
const router=express.Router();
const gradeController=require('../controllers/grades.controllers');

router.route("/test").get(function(req,res){
    res.status(200).json('OK');
});

router.route("/grades").get(gradeController.getAll);

router.route("/grades/:gradeId").get(gradeController.getOne).delete(gradeController.deleteOne);


module.exports=router;