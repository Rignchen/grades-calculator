import {Component, Input, numberAttribute} from '@angular/core';
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
  @Input() look: string = "";
  defaultStyle: string = "inline-flex items-center gap-x-1.5 rounded-md text-gray-900 ring-1 ring-inset ";
}
