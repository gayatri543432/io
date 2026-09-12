import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/shared/const/students';
import { IStudent } from 'src/app/shared/model/student.interface';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  studentsArr:IStudent[]=[]
  editObj!:IStudent
  constructor( private _snackBarSevice :SnackbarService) { }

  ngOnInit(): void {
    this.studentsArr=students
  }
  onSubmit(std:IStudent){
    this.studentsArr.unshift(std)
      this._snackBarSevice.openSnackbar(`The Student with Id ${std.id} Created Successfully..`)

  }
  editStd(std:IStudent){
    this.editObj=std
  }
  removeStd(id:number){
    let getConfirm=confirm("Are you sure you want to delete student?")
    if(getConfirm){
      let getIndex=this.studentsArr.findIndex(s=>s.id === id)
      this.studentsArr.splice(getIndex,1)
      this._snackBarSevice.openSnackbar(`The Student with Id ${id} Remove Successfully..`)
    }
  }

  onUpdate(std:IStudent){
    let getIndex=this.studentsArr.findIndex(s=>s.id === std.id)
    this.studentsArr[getIndex]=std
    this._snackBarSevice.openSnackbar(`The Student Updated Successfully..`)

  }
}
