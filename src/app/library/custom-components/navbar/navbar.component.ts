/**
 * @author - Prabhat Dutt
 * @description - This component contains Top-navbar Section with Logo, Navigation
 * elements and 'Login' and 'Get Started' Buttons.
 */
import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { L10N_LOCALE, L10nLocale } from "angular-l10n";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styles: [],
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {}

  ngOnInit() {}
  @HostListener("window:scroll", ["$event"]) onWindowScroll(e) {
    this.isScrolled = window.pageYOffset > 100;
  }
}
