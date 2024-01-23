import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {average, round} from "../lib";

export class allSubject {
  math    = new Subject(8, [[]]);
  societe = new Subject(8, [[]]);
  anglais = new Subject(8, [[]]);
  epsic  = new Modules(new Map([[110, 3], [112, 5], [113, 1], [114, 6]]));
  cie    = new Modules(new Map([[110, 3], [112, 5], [113, 1], [114, 6]]));
  tpi: number = 0;
}

export class Subject {
  semesterAmount!: number;
  semesters: WritableSignal<Semester[]> = signal([]);
  average: Signal<number> = computed(
    () => {
      GradeListService.debug.subject_update++
      return round(average(this.semesters().map((semester) => semester.average()), true), 0.1)
    }
  );
  constructor(semesterAmount: number, defaultValues: number[][]) {
    this.semesterAmount = semesterAmount;
    defaultValues.forEach((array) => { this.semesters.update(semesters => [...semesters, new Semester(array)])});
  }
}
export class Semester {
  grades!: WritableSignal<number[]>;
  average: Signal<number> = computed(() => {
    GradeListService.debug.semester_update++
    return round(average(this.grades(), true), 0.5)
  });

  constructor(array: number[] = []) {
    this.grades = signal(array);
  }
}
export class Modules {
  grades!: WritableSignal<Map<number, number>>;
  average: Signal<number> = computed(() => {
    GradeListService.debug.subject_update++
    return round(average(Array.from(this.grades().values()), true), 0.5)
  });
  constructor(map: Map<number, number>) {
    this.grades = signal(map);
  }
}

@Injectable({
  providedIn: 'root'
})
export class GradeListService {
  static subjects = new allSubject();
  static currentSubject = 0;

  static debug = {
    "grade_change": 0,
    "semester_update": 0,
    "subject_update": 0,
    "global_update": 0,
    "computer_update": 0,
    "competence_update": 0,
    "display_message": "",
    "subject_change": 0,

    print(message: string) {GradeListService.debug.display_message = message;}
  }
}
