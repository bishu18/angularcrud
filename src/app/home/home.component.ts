import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { Home2Component } from '../home2/home2.component';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { EditComponent } from '../edit/edit.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public employeeservice: EmployeeService,
    private dialog: MatDialog) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id','name','email', 'actions'];

  ngOnInit() {
    this.employeeservice.getEmployee().subscribe(data => {

      let array = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email'],
          
        };
      })
      // console.log(this.employee);
      this.listData = new MatTableDataSource(array);
    });

    
    
  }


  onEdit(row) {
    row.isedit = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "60%";
    this.dialog.open(EditComponent, dialogConfig);
  }

  onDelete(id) {
    this.employeeservice.deleteEmployee(id);
  }

  onCreate() {
    // this.employeeservice.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(Home2Component);
  }

  // onEdit(row){
  //   this.employeeservice.populateForm(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "60%";
  //   this.dialog.open(EmployeeComponent,dialogConfig);
  // }


  
}

