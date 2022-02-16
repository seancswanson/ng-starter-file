import { Component, Input, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  @Input() sidebarExpanded = false;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('event NavigationStart', event);
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        console.log('event NavigationEnd', event);
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        console.log('event NavigationError', event);
        // Hide loading indicator
        // Present error to user
      }
    });
   }

  ngOnInit(): void {
  }
}
