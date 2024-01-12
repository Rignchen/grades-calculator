import { Routes } from '@angular/router';
import {SubjectComponent} from "./subject/subject.component";

export const routes: Routes = [
  { path: '', redirectTo: 'math', pathMatch: 'full' },

  { path: 'ang' , redirectTo: 'anglais', pathMatch: 'full' },
  { path: 'english' , redirectTo: 'anglais', pathMatch: 'full' },

  { path: ':subject', component: SubjectComponent }
];
