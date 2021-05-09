import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { EligibilityFormComponent } from './eligibility-form/eligibility-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FeaturesComponent } from './features/features.component';
import { DigitOnlyDirective } from 'src/app/shared/directives/number-only-directive'

@NgModule({
  declarations: [
    HomeComponent,
    EligibilityFormComponent,
    FeaturesComponent,
    DigitOnlyDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    FeaturesComponent
  ]
})
export class HomeModule { }
