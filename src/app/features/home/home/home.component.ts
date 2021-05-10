/**
 * @author - Prabhat Dutt
 * @description - This component contains sections containing the
 * 'We make it Super Simple' section and eligibility calculator component.
 */

import { Component, Inject, OnInit } from "@angular/core";
import { L10N_LOCALE, L10nLocale } from "angular-l10n";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [""],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {}

  ngOnInit(): void {}
}
