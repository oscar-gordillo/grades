import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from './grades/grades.component';



@Injectable({
  providedIn: 'root'
})
export class GradesDataService {

  private _baseUrl="http://localhost:3000/api";

  constructor(private _http:HttpClient) { }

  public getGrades():Observable<Grade[]>{
    const url=this._baseUrl+"/grades";
    return this._http.get(url) as Observable<Grade[]>;
  }
  public getGrade(gradeId:string):Observable<Grade>{

    const url=this._baseUrl+"/grades/"+gradeId;
    return this._http.get(url) as Observable<Grade>;
  }
  public deleteGrade(gradeId:string):Observable<Grade>{

    const url=this._baseUrl+"/grades/"+gradeId;
    return this._http.delete(url) as Observable<Grade>;
  }
}
