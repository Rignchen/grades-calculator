import { Component } from '@angular/core';
import {GradeComponent} from "../subject/semester/grade/grade.component";

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [
    GradeComponent
  ],
  templateUrl: './modules.component.html'
})
export class ModulesComponent {

}
