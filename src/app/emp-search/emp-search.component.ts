import { Component, OnInit } from '@angular/core';
import { HttprestService } from '../httprest.service';
import { Employee } from './emp.model';
import { EmployeeSearchCriteria } from './searchCriteria.model'

@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {

  employees: Employee[];
  searchCriteria: EmployeeSearchCriteria;
  noRecords: Boolean;

  constructor(private rest: HttprestService) {
    // this.restService = rest;
   }

  ngOnInit(): void {
    this.searchCriteria = new EmployeeSearchCriteria();
    // let today = new Date();
    //     let month = today.getMonth();
    //     let year = today.getFullYear();
    //     let prevMonth = (month === 0) ? 11 : month -1;
    //     let prevYear = (prevMonth === 11) ? year - 1 : year;
    //     let nextMonth = (month === 11) ? 0 : month + 1;
    //     let nextYear = (nextMonth === 0) ? year + 1 : year;
    //     this.minDate = new Date();
    //     this.minDate.setMonth(prevMonth);
    //     this.minDate.setFullYear(prevYear);
    //     this.maxDate = new Date();
    //     this.maxDate.setMonth(nextMonth);
    //     this.maxDate.setFullYear(nextYear);

    //     let invalidDate = new Date();
    //     invalidDate.setDate(today.getDate() - 1);
    //     this.invalidDates = [today,invalidDate];

    this.rest.restCall().then(response => 
      {
        this.employees = response;
        this.noRecords = this.searchEmployee.length>0 ? false:true;
      });

  }

  searchEmployee(){
    console.log("Hi........."+(this.searchCriteria.name));
    this.rest.getEmpBySearchCriteria(this.searchCriteria).then(response =>{ 
      this.employees = response
      this.noRecords = this.searchEmployee.length>0 ? false:true;
    });
  }

}
