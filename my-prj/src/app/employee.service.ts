import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
private baseURL="http://localhost:5557/employees";

  constructor(private http:HttpClient) { }
  getEmployeeList():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:5557/employees');
  }

  createEmployee(employee:Employee):Observable<Object>
  {
    return this.http.post('http://localhost:5557/employees',employee);
  }
  getEmployeeById(id:number):Observable<Employee>
  {
    return this.http.get<Employee>('http://localhost:5557/employees/id');
  }
  updateEmployee(id:number,employee:Employee):Observable<Object>
  {
     return this.http.put('http://localhost:5557/employees/id',employee);
  }
  deleteEmployee(id:number):Observable<Object>
  {
    return this.http.delete('http://localhost:5557/employees/'+id);
  }
}
