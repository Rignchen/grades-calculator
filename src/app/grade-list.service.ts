import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

export class allSubject {
  math = new Subject(8);
  societe = new Subject(8);
  anglais = new Subject(8);
  epsic = new Subject(8);
  cie = new Subject(8,[5]);
  tpi: number = 0;
}
export class Subject {
  semesterAmount!: number;
  semesters!: Semester[];
  average: WritableSignal<number> = signal(0);
  constructor(semesterAmount: number, array: number[] = []) {
    this.semesterAmount = semesterAmount;
    this.semesters = [new Semester(array)];
  }
}
export class Semester {
  grades!: WritableSignal<number[]>;
  average: Signal<number> = signal(0);

  constructor(array: number[] = []) {
    this.grades = signal(array);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
}
