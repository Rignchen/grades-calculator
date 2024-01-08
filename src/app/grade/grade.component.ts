import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './grade.component.html'
})
export class GradeComponent {
  @Input() grade!: number;
}
