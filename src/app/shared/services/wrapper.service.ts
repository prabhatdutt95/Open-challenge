import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WrapperService {

  constructor(private httpClient: HttpClient) { }

  public async Api(method: string, apiUrl: any) {
    const response = await this.httpClient.request(method, apiUrl);
    return response;
  }
}
