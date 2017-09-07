import { Observable } from 'rxjs/Observable';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

const DEFAULT_CONTENT_TYPE = 'application/json';

@Injectable()
export class HttpRequesterService {

  constructor(private http: Http) {
  }

  get(url: string, requestHeaders: any): Observable<Response> {
    const requestOptions = this.getRequestOptions(requestHeaders);

    return this.http.get(url, requestOptions);
  }

  put(url: string, data: any, requestHeaders: any): Observable<Response> {
    const body = JSON.stringify(data);
    const requestOptions = this.getRequestOptions(requestHeaders);

    return this.http.put(url, body, requestOptions);
  }

  post(url: string, data: any, requestHeaders: any): Observable<Response> {
    // const body = JSON.stringify(data);
    const requestOptions = this.getRequestOptions(requestHeaders);

    return this.http.post(url, data, requestOptions);
  }

  private getRequestOptions(requestHeaders: any): RequestOptions {
    requestHeaders['Content-Type'] = 'application/json';
    const headers = new Headers(requestHeaders);
    return new RequestOptions({ headers });
  }
}
