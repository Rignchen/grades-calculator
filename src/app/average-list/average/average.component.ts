import {Component, Input, OnChanges} from '@angular/core';
import {NgIf} from "@angular/common";
import {round} from "../../../lib";

@Component({
    selector: 'app-average',
    standalone: true,
  imports: [
    NgIf
  ],
    templateUrl: './average.component.html'
})
export class AverageComponent implements OnChanges {
  @Input() name!: string;
  @Input() value!: number;
  old_value: number = 0;
  upgrade: number = 0;
  has_changed: boolean = false;

  defaultClass = "text-xs font-medium"
  class = this.defaultClass;

  ngOnChanges() {
    if (this.old_value !== 0) {
      this.upgrade = (this.value / this.old_value - 1);
      this.has_changed = true;

      this.class = this.defaultClass;
      if (this.upgrade > 0) {
        this.class += " text-green-600";
      } else if (this.upgrade < 0) {
        this.class += " text-red-500";
      }
    }
    this.old_value = this.value;
  }

  protected readonly round = round;
  protected readonly abs = Math.abs;
}
