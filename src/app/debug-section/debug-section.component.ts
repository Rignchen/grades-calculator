import {Component, Input} from '@angular/core';
import {GradeListService} from "../grade-list.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-debug-section',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './debug-section.component.html'
})
export class DebugSectionComponent {
  protected readonly GradeListService = GradeListService;
  protected readonly allSubjects = ["global", "math", "societe", "anglais", "computer", "epsic", "cie"];
}
