import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarExpanded: boolean = false;

  constructor() {

  }

  toggleSidebarExpansion(event: boolean) {
    this.sidebarExpanded = !this.sidebarExpanded;
  }
}
