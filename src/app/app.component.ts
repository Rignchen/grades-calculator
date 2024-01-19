import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SemesterComponent } from "./subject/semester/semester.component";
import {GradeComponent} from "./subject/grade/grade.component";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";
import {AverageListComponent} from "./average-list/average-list.component";
import {GradeListService} from "./grade-list.service";
import {DebugSectionComponent} from "./debug-section/debug-section.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SemesterComponent, GradeComponent, FormsModule, NavbarComponent, AverageListComponent, DebugSectionComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentSubject: number = 0;
  subjects = GradeListService.subjects;
}
