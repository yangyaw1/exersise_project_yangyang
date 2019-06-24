import { Injectable } from '@angular/core';
import { Test, Question } from '../models/test.model';
// import { TESTS } from '../mock-tests';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private tests: Test[] = TESTS;
  private _testSource = new BehaviorSubject<Test[]>([]);
  
  constructor(private httpClient: HttpClient) { }
  
  gettests(): Observable<Test[]>{
    // return this.tests;
    this.httpClient.get(`api/v1/tests`)
      .toPromise()
      .then((res: any) => {
        this._testSource.next(res);
      })
      .catch(this.handleError);
      
      return this._testSource.asObservable();
  }
  gettest(id: number): Promise<Test> {
    // return this.tests.find((test) => test.id === id)
    return this.httpClient.get(`api/v1/tests/${id}`)
      .toPromise()
      .then((res: any) => res)
      .catch(this.handleError);
  }
  addtest(newtest: Test) {
    // newtest.id = this.tests.length + 1;
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    return this.httpClient.post(`api/v1/tests/`, newtest, options)
       .toPromise()
       .then((res: any) => {
         this.gettests();
         return res;
       })
       .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.body || error);
  }
}
