import { Injectable } from '@angular/core';

export class allSubject {
  math = new Subject();
  societe = new Subject();
  anglais = new Subject();
  epsic = new Subject();
  cie = new Subject();
  tpi: number = 0;
}
class Subject {
  semesters: number[][] = [[]]
  average: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
}
