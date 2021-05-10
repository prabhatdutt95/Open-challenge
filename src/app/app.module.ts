import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Custom Modules
import { HomeModule } from "./features/home/home.module";
import { SharedModule } from "./shared/shared.module";

// localisation
import { L10nLoader } from "angular-l10n";

import { AppComponent } from "./app.component";

// initialise the l10nLoader
export function initL10n(l10nLoader: L10nLoader): () => Promise<void> {
  return () => l10nLoader.init();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    HomeModule,
    SharedModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initL10n,
      deps: [L10nLoader],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
