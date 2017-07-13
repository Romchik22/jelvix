import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';

const api =  'https://jsonplaceholder.typicode.com';
@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  request(method, uri) {
    const [url, requestOptions]: any = this.prepareRequestOptions(method, uri);
    console.log('request to: ', url);
    return this.http
      .request(url, requestOptions)
      .map(resp => resp.json())
      .catch(e => e.json()); // should write method to handle server errors
  }

  private prepareRequestOptions(method, uri): [string, RequestOptions] {
    const requestOptionsObject = {
      method: method
    };

    const url = api + uri;

    const compiledHeaders = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' };

    requestOptionsObject['headers'] = new Headers(compiledHeaders);

    return [url, new RequestOptions(requestOptionsObject)];
  }
}
