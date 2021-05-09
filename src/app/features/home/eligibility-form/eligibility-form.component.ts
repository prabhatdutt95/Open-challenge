import { Component, OnInit } from "@angular/core";

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
  existingEMI;
  constructor() {}

  ngOnInit(): void {}
}
