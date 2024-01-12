import {Component, Input} from '@angular/core';
import {AverageComponent} from "./average/average.component";

@Component({
  selector: 'app-average-list',
  standalone: true,
  imports: [
    AverageComponent
  ],
  templateUrl: './average-list.component.html'
})
export class AverageListComponent {

}
