import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GradeListService, Semester} from "../../../grade-list.service";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Output() gradeChange = new EventEmitter<number>();
  newGrade!: number|null;
  @Input() semester!: Semester;

  addGrade() {
    if (this.newGrade && this.newGrade >= 1 && this.newGrade <= 6 && this.newGrade % 0.5 === 0) {
      GradeListService.debug.grade_change++;
      // @ts-ignore
      this.semester.grades.update((grades) => grades = [...grades,this.newGrade]);
      this.newGrade = null;
    }
  }
}
