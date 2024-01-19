import {Component, Input, OnInit} from '@angular/core';
import {last} from "../../../lib";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {GradeListService} from "../../grade-list.service";

@Component({
    selector: 'app-nav-link',
    standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
    templateUrl: './nav-link.component.html'
})
export class NavLinkComponent implements OnInit {
  @Input() subject!: string;
  @Input() subjectNumber!: number;
  link!: string;

  ngOnInit() {
    this.link = '/' + last(this.subject.toLowerCase().replaceAll('é', 'e').split(' '));
  }

  protected readonly GradeListService = GradeListService;
}
