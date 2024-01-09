import { Routes } from '@angular/router';
import {SubjectComponent} from "./subject/subject.component";

export const routes: Routes = [
  { path: '', redirectTo: 'math', pathMatch: 'full' },
  { path: ':subject', component: SubjectComponent }
];
