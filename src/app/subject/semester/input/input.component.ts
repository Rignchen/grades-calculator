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
  newGrade!: number|null;

  addGrade() {
    if (this.newGrade && this.newGrade >= 1 && this.newGrade <= 6 && this.newGrade % 0.5 === 0) {
      this.gradeChange.emit(this.newGrade);
      this.newGrade = null;
    }
  }
}
