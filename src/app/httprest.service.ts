import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './emp-search/emp.model'
import { EmployeeSearchCriteria } from './emp-search/searchCriteria.model'

@Injectable({
  providedIn: 'root'
})
export class HttprestService {

  baseURL: string = "http://localhost:8081/employees/"

  constructor(private http: HttpClient) { }

  restCall(){
    console.log('about to make a rest call');
    return this.http.get(this.baseURL+'all').toPromise().then(response =>  <Employee[]>response).then(data => { return data; });
  }

  getEmpBySearchCriteria(employeeSearchCriteria: EmployeeSearchCriteria){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(employeeSearchCriteria);
    console.log(body)
    return this.http.post(this.baseURL + 'search', body,{'headers':headers}).toPromise().then(response =>  <Employee[]>response).then(data => { return data; });
  }

}
