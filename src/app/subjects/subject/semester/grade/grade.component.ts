import {Component, Input, numberAttribute, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-grade',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './grade.component.html'
})
/**
 * look:<br>
 * 0 = default grade<br>
 * 1 = semester average<br>
 * 2 = subject average<br>
 **/
export class GradeComponent {
  @Input() grade!: number;
  @Input() look!: number;
}
