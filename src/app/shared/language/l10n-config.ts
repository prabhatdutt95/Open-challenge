import {
    L10nConfig,
    L10nTranslationLoader,
    L10nProvider
  } from 'angular-l10n';
  import { Injectable, Optional } from '@angular/core';
  import { Observable } from 'rxjs';
  import { HttpHeaders, HttpClient } from '@angular/common/http';
  
  export const l10nConfig: L10nConfig = {
    format: 'language-region',
    providers: [{ name: 'app', asset: 'assets/l18n' }],
    cache: true,
    keySeparator: '.',
    defaultLocale: {
      language: 'en-US',
      currency: 'USD',
      timeZone: 'America/Los_Angeles'
    },
    defaultRouting: true,
    schema: [
      {
        locale: {
          language: 'en-US',
          currency: 'USD',
          timeZone: 'America/Los_Angeles'
        },
        dir: 'ltr',
        text: 'United States'
      }
    ]
  };
  
  @Injectable()
  export class HttpTranslationLoader implements L10nTranslationLoader {
    private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'cache': 'no-cache' });
  
    constructor(@Optional() private remoteService: HttpClient) {}
  
    public get( language: string, provider: L10nProvider ): Observable<{ [key: string]: any }> {
      const url = `${provider.asset}/${language}.json`;
      const options = {
        headers: this.headers,
      };
      const translationProvider = this.remoteService.get(url, options);
      return (translationProvider);
    }
  }
  