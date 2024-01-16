import {Component, CreateSignalOptions, Input, signal, WritableSignal} from '@angular/core';
import {Subject} from "../../grade-list.service";

@Component({
  selector: 'app-add-semester',
  standalone: true,
  imports: [],
  templateUrl: './add-semester.component.html'
})
export class AddSemesterComponent {

  @Input() subject!: Subject;
  protected readonly signal = signal;
}
