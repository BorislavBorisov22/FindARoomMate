import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequesterService {

  constructor(private http: Http) { }

  get(url: string, requestHeaders: any): Observable<Response> {
    const headers = new Headers(requestHeaders);

    return this.http.get(url, { headers });
  }

  put(url: string, data: any, requestHeaders: any): Observable<Response> {
    const body = JSON.parse(data);
    const headers = new Headers(requestHeaders);

    return this.http.put(url, body, { headers });
  }

  post(url: string, data: any, requestHeaders: any): Observable<Response> {
    const body = JSON.stringify(data);
    const headers = new Headers(requestHeaders);

    return this.http.post(url, data, { headers });
  }
}
