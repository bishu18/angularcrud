import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Home2Component } from '../home2/home2.component';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

employee: any;
employeeName: string;
email: string;

  constructor(public employeeservice: EmployeeService,
    public dialogRef: MatDialogRef<EditComponent>) { }

  ngOnInit() {
    this.employeeservice.get_Employee().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email'],
          
        };
      })
      console.log(this.employee);
    });
  }


  UpdateRecord(recorddata)
  {
    let record = {};
    record['name'] = recorddata.editname;
    record['email'] = recorddata.editemail;
    this.employeeservice.updateEmployee(recorddata.id, record);
    recorddata.isedit = false;
  }
}
