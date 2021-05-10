import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { L10nTranslationModule } from "angular-l10n";
import {
  l10nConfig,
  HttpTranslationLoader,
} from "src/app/shared/language/l10n-config";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    L10nTranslationModule.forRoot(l10nConfig, {
      translationLoader: HttpTranslationLoader,
    }),
  ],
  exports: [NavbarComponent],
})
export class CustomComponentsModule {}
