import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public fireservices: AngularFirestore) { }

  getEmployee() {
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  get_Employee() {
    return this.fireservices.collection('Employee').snapshotChanges();
  }

  createEmployee(Record){
    return this.fireservices.collection('Employee').add(Record);
  }
  
  updateEmployee(recordid, record){
    this.fireservices.doc('Employee/' + recordid).update(record);
  }

  deleteEmployee(employeeId: string){
    this.fireservices.doc('Employee/' + employeeId).delete();
  }
  
  // updateForm(employee){
  //   this.fireservices.setValue();
  // 
  

}

