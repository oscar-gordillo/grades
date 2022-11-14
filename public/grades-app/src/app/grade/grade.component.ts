import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GradesDataService } from '../grades-data.service';
import { Grade } from '../grades/grades.component';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  grade!:Grade;

  constructor(private _gradeService:GradesDataService, private _router:ActivatedRoute, private _routerNav:Router) { }

  ngOnInit(): void {
    const gradeId:string=this._router.snapshot.params["gradeId"];
    this._gradeService.getGrade(gradeId).subscribe(value=>{
      this.grade=value;
      if (this.grade.scores[2].score > this.grade.scores[3].score) {
        let aux=this.grade.scores[2].score;
        this.grade.scores[2].score=this.grade.scores[3].score;
        this.grade.scores[3].score=aux;
      }
    });
  }

  deleteGrade(gradeId:string){
    this._gradeService.deleteGrade(gradeId).subscribe(value=>{
      console.log(value);
      this._routerNav.navigate(['grades']);
    });
  }

}
