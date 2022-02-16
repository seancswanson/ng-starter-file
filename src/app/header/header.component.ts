import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter<boolean>();
  constructor() { }
  ngOnInit(): void {
  }

  handleMenuButtonClick(value: boolean) {
    console.log('Sidebar toggle clicked.')
    this.menuButtonClicked.emit(value);
  }

}
