import { Component, OnInit } from '@angular/core';
import { GradesDataService } from '../grades-data.service';

export class Grade {
  #_id:string;
  private _student_id: number;
  private _class_id: number;
  private _scores: any[];



  public get _id(): string {
    return this.#_id;
  }

  public set _id(_id: string) {
    this.#_id = _id;
  }
  public get student_id(): number {
    return this._student_id;
  }

  public set student_id(student_id: number) {
    this._student_id = student_id;
  }

  public get class_id(): number {
    return this._class_id;
  }

  public set class_id(class_id: number) {
    this._class_id = class_id;
  }

  public get scores(): any[] {
    return this._scores;
  }

  public set scores(scores: any[]) {
    this._scores = scores;
  }

  constructor(_id:string, student_id: number, class_id: number, scores: any[]) {
    this.#_id=_id;
    this._student_id = student_id
    this._class_id = class_id
    this._scores = scores
  }

}
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  constructor(private _gradeService:GradesDataService) { }

  ngOnInit(): void {
    this._gradeService.getGrades().subscribe(value=>{
      this.grades=value;
    });
  }

  grades:Grade[]=[];

  

}
