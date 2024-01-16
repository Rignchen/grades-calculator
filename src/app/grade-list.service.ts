import {Injectable, signal, WritableSignal} from '@angular/core';

export class allSubject {
  math = new Subject();
  societe = new Subject();
  anglais = new Subject();
  epsic = new Subject();
  cie = new Subject(5);
  tpi: number = 0;
}
export class Subject {
  semesters: WritableSignal<number[]>[] = [signal<number[]>([])]
  average: number = 0;
  constructor(number: number = 0) {
    this.average = number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
}
