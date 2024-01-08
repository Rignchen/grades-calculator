import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.css'
})
export class SemesterComponent {
  @Input() semester!: Number[];
  @Input('semester-number') semesterNumber!: number;
}
