import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../grade-list.service";

@Component({
  selector: 'app-societe',
  standalone: true,
  imports: [
    SubjectComponent
  ],
  templateUrl: './generic.component.html'
})
export class SocieteComponent {
  subject = GradeListService.subjects.societe;
  subjectNumber = 2;
}
