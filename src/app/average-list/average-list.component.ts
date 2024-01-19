import {Component, computed, Input, OnChanges, OnInit, Signal} from '@angular/core';
import {AverageComponent} from "./average/average.component";
import {round, weightedAverage} from "../../lib";
import {allSubject, GradeListService} from "../grade-list.service";

@Component({
  selector: 'app-average-list',
  standalone: true,
  imports: [
    AverageComponent
  ],
  templateUrl: './average-list.component.html'
})
export class AverageListComponent {
  @Input() subjects!: allSubject;
  averages: {"computer": Signal<number>, "competence": Signal<number>, "global": Signal<number>} = {
    computer: computed(() => {
      GradeListService.debug.computer_update++
      return round(weightedAverage([
        [this.subjects.epsic.average(), 4],
        [this.subjects.cie.average(), 1]
      ]), 0.1)
    }),
    competence: computed(() => {
      GradeListService.debug.competence_update++
      return round(weightedAverage([
        this.subjects.math.average(),
        this.subjects.anglais.average(),
      ]), 0.5)
    }),
    global: computed(() => {
      GradeListService.debug.global_update++
      return round(weightedAverage([
        [this.subjects.tpi, 4],
        [this.averages.computer(), 3],
        [this.averages.competence(), 1],
        [this.subjects.societe.average(), 2]
      ]), 0.1)
    })
  }
}
