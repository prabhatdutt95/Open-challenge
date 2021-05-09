// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponentsModule } from '../library/custom-components/custom-components.module';
import { CustomControlsModule } from '../library/custom-controls/custom-controls.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomComponentsModule,
    CustomControlsModule
  ],
  exports: [
    CustomComponentsModule,
    CustomControlsModule
  ]
})
export class SharedModule { }
