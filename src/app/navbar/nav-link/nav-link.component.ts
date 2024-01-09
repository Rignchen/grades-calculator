import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-nav-link',
    standalone: true,
    imports: [],
    templateUrl: './nav-link.component.html'
})
export class NavLinkComponent {
  @Input() subject!: string;
  @Input() current: boolean = false;
  style() {
    let defaultStyle = "rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm hover:bg-opacity-10"
    if (this.current) {
      defaultStyle += " text-white font-bold"
    }
    else {
      defaultStyle += " text-sky-100"
    }
    return defaultStyle
  }
  link() {
    const link = this.subject.toLowerCase().replaceAll('é', 'e').split(' ')
    return link[link.length -1]
  }
}
