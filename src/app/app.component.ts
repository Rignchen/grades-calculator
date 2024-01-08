import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SemesterComponent } from "./semester/semester.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SemesterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  semesters: number[][] = [[1,2,3,4,5,6],[6,5,4,3,2,1]];
}
