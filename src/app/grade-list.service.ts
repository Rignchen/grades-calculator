import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {average} from "../lib";

export class allSubject {
  math = new Subject(8);
  societe = new Subject(8);
  anglais = new Subject(8);
  epsic = new Subject(8);
  cie = new Subject(8,[[5],[3]]);
  tpi: number = 0;
}
export class Subject {
  semesterAmount!: number;
  semesters: Semester[] = [];
  average!: Signal<number>;
  constructor(semesterAmount: number, defaultValues: number[][] = [[]]) {
    this.semesterAmount = semesterAmount;
    defaultValues.forEach((array) => { this.semesters.push(new Semester(array)) });
    this.average = signal(average(this.semesters.map(a => a.average()), true));
  }
}
export class Semester {
  grades!: WritableSignal<number[]>;
  average!: Signal<number>;

  constructor(array: number[] = []) {
    this.grades = signal(array);
    this.average = signal(average(this.grades(), true));
  }
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
}
