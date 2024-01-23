import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../grade-list.service";

@Component({
  selector: 'app-epsic',
  standalone: true,
  imports: [
    SubjectComponent
  ],
  templateUrl: './generic-modules.component.html'
})
export class EpsicComponent {
  subject = GradeListService.subjects.epsic;
  subjectNumber = 3;
}

