import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../../grade-list.service";
import {ModulesComponent} from "../modules/modules.component";

@Component({
  selector: 'app-epsic',
  standalone: true,
  imports: [
    SubjectComponent,
    ModulesComponent
  ],
  templateUrl: './generic-modules.component.html'
})
export class EpsicComponent {
  subject = GradeListService.subjects.epsic;
  subjectNumber = 3;
}

