import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

employee: any;
employeeName: string;
email: string;

  constructor(public employeeservice: EmployeeService,
    public dialogRef: MatDialogRef<Home2Component>) { }

  ngOnInit() : void {
  } 


  CreateRecord()
  {
    let Record = {};
    Record['name'] = this.employeeName;
    Record['email'] = this.email;

    this.employeeservice.createEmployee(Record).then(res => {

        this.employeeName = "";
        this.email = "";
        console.log(res);
    }).catch(error => {
      console.log(error);
    });
    this.dialogRef.close();
  }

  

  

  
}
