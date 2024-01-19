import {Component, Input} from '@angular/core';
import {Semester, Subject} from "../../grade-list.service";

@Component({
  selector: 'app-add-semester',
  standalone: true,
  imports: [],
  templateUrl: './add-semester.component.html'
})
export class AddSemesterComponent {
  @Input() subject!: Subject;

  addSemester() {
    this.subject.semesters.update(semesters => [...semesters, new Semester()]);
  }
}
