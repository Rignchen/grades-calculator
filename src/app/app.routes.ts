import { Routes } from '@angular/router';
import { MathComponent } from "./subjects/math.component";
import { AnglaisComponent } from "./subjects/anglais.component";
import { SocieteComponent } from "./subjects/societe.component";
import { EpsicComponent } from "./subjects/epsic.component";
import { CieComponent } from "./subjects/cie.component";
import {NotFoundComponent} from "./subjects/404/404.component";

export const routes: Routes = [
  // redirections
  { path: '', redirectTo: 'math', pathMatch: 'full' },

  { path: 'ang' , redirectTo: 'anglais', pathMatch: 'full' },
  { path: 'english' , redirectTo: 'anglais', pathMatch: 'full' },

  // subjects
  { path: 'math', component: MathComponent },
  { path: 'anglais', component: AnglaisComponent },
  { path: 'societe', component: SocieteComponent },
  { path: 'epsic', component: EpsicComponent },
  { path: 'cie', component: CieComponent },

  // 404
  { path: '**', component: NotFoundComponent }
];
