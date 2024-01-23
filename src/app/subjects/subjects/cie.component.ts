import { Component } from '@angular/core';
import {SubjectComponent} from "../subject/subject.component";
import {GradeListService} from "../../grade-list.service";
import {ModulesComponent} from "../modules/modules.component";

@Component({
  selector: 'app-cie',
  standalone: true,
  imports: [
    SubjectComponent,
    ModulesComponent
  ],
  templateUrl: './generic-modules.component.html'
})
export class CieComponent {
  subject = GradeListService.subjects.cie;
  subjectNumber = 4;
}

