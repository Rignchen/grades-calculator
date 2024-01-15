import {Component, Input, OnInit} from '@angular/core';
import {AverageComponent} from "./average/average.component";
import {round, weightedAverage} from "../../lib";
import {allSubject} from "../grade-list.service";

@Component({
  selector: 'app-average-list',
  standalone: true,
  imports: [
    AverageComponent
  ],
  templateUrl: './average-list.component.html'
})
export class AverageListComponent implements OnInit {
  @Input() subjects!: allSubject;
  averages!: Averages;

  ngOnInit() {
    this.averages = new Averages(this.subjects);
  }
}

class Averages {
  global!: number;
  competence!: number;
  computer!: number;
  constructor(subjects: allSubject) {
    this.computer = round(weightedAverage([
      [subjects.epsic.average, 4],
      [subjects.cie.average, 1]
    ]),0.1);
    this.competence = round(weightedAverage([
      subjects.math.average,
      subjects.anglais.average,
    ]),0.5);
    this.global = round(weightedAverage([
      [subjects.tpi, 4],
      [this.computer, 3],
      [this.competence, 1],
      [subjects.societe.average, 2]
    ]), 0.1);
  }
}
