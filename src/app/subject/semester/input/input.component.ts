import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

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
  newGrade!: number;

  addGrade(grade: number) {
    if (grade >= 1 && grade <= 6 && grade % 0.5 === 0) {
      this.gradeChange.emit(grade);
    }
  }
}
