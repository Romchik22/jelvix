import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import * as _ from 'lodash';
import 'rxjs/Rx';

const api =  'https://jsonplaceholder.typicode.com';
@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  request(method, uri, data = {}) {
    const [url, requestOptions]: any = this.prepareRequestOptions(method, uri, data);
    console.log('request to: ', url);
    return this.http
      .request(url, requestOptions)
      .map(resp => resp.json())
      .catch(e => e.json()); // should write method to handle server errors
  }

  private prepareRequestOptions(method, uri, data): [string, RequestOptions] {
    const requestOptionsObject = {
      method: method,
      body: data
    };

    const url = api + uri;

    const compiledHeaders = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    requestOptionsObject['headers'] = new Headers(compiledHeaders);

    return [url, new RequestOptions(requestOptionsObject)];
  }
}
