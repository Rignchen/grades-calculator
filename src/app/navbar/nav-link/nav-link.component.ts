import {Component, Input, OnInit} from '@angular/core';
import {last} from "../../../lib";

@Component({
    selector: 'app-nav-link',
    standalone: true,
    imports: [],
    templateUrl: './nav-link.component.html'
})
export class NavLinkComponent implements OnInit {
  @Input() subject!: string;
  @Input() isCurrent: boolean = false;

  style = "rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
  link!: string;

  ngOnInit() {
    // style
    if (this.isCurrent) this.style += " text-white font-bold";
    else this.style += " text-sky-100"

    // link
    this.link = '/' + last(this.subject.toLowerCase().replaceAll('é', 'e').split(' '));
  }
}
