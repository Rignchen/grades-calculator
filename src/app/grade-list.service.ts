import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

export class allSubject {
  math = new Subject();
  societe = new Subject();
  anglais = new Subject();
  epsic = new Subject();
  cie = new Subject(5);
  tpi: number = 0;
}
export class Subject {
  semesters: Semester[] = [new Semester()];
  average: WritableSignal<number> = signal(0);
  constructor(number: number = 0) {
    this.average = signal(number);
  }
}
export class Semester {
  grades = signal<number[]>([]);
  average: Signal<number> = signal(0);
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
}
