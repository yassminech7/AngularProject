import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.css'
})
export class CommonHeaderComponent {
  @Input() pageTitle!: string;
  @Input() navLinks!: { label: string, route: string }[];
  @Output() linkClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onLinkClick(route: string) {
    this.linkClicked.emit(route);
  }

}
