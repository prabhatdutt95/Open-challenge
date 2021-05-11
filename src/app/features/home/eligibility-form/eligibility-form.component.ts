/**
 * @author - Prabhat Dutt
 * @description - This component contains Eligibility Calculator card section.
 */

import { Component, Inject, OnInit } from "@angular/core";
import { L10N_LOCALE, L10nLocale } from "angular-l10n";

@Component({
  selector: "app-eligibility-form",
  templateUrl: "./eligibility-form.component.html",
  styles: [""],
})
export class EligibilityFormComponent implements OnInit {
  incomeDetails = {
    value: 150000,
    min: 100000,
    max: 300000,
  };
  expenseDetails = {
    value: 50000,
    min: 10000,
  };
  existingEMI = '';
  comaRegexp = new RegExp(/\,/g);

  constructor(@Inject(L10N_LOCALE) public locale: L10nLocale) {}

  ngOnInit(): void {}
}
