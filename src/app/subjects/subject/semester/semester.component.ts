import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {GradeComponent} from "./grade/grade.component";
import {FormsModule} from "@angular/forms";
import {InputComponent} from "./input/input.component";
import {Semester} from "../../../grade-list.service";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent,
    FormsModule,
    NgIf,
    InputComponent
  ],
  templateUrl: './semester.component.html'
})
export class SemesterComponent {
  @Input() semester!: Semester;
  @Input('semester-number') semesterNumber!: number;
  @Output() averageChange = new EventEmitter<number[]>();
}
