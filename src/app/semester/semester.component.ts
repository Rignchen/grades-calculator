import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {GradeComponent} from "../grade/grade.component";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf,
    GradeComponent
  ],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.css'
})
export class SemesterComponent {
  @Input() semester!: number[];
  @Input('semester-number') semesterNumber!: number;
}
