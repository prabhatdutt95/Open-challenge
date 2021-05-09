import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  isScrolled: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    this.isScrolled = window.pageYOffset > 100;
  }

}
