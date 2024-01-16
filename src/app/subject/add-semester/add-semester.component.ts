import {Component, Input, signal} from '@angular/core';
import {Semester, Subject} from "../../grade-list.service";

@Component({
  selector: 'app-add-semester',
  standalone: true,
  imports: [],
  templateUrl: './add-semester.component.html'
})
export class AddSemesterComponent {
  newSemester() {
    return new Semester();
  }

  @Input() subject!: Subject;
  protected readonly signal = signal;
}
