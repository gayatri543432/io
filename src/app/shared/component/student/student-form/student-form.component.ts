import { Component, OnInit, Output, ViewChild ,EventEmitter, OnChanges, SimpleChanges, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

import { IStudent } from 'src/app/shared/model/student.interface';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit ,OnChanges{
  @ViewChild('stdForm') stdForm! :NgForm
  @Input('stdEdit') stdEdit!:IStudent
  @Output() stdCreated=new EventEmitter<IStudent>()
  @Output() updatestd=new EventEmitter<IStudent>()


  isInEditMode:boolean=false
  editId!:number
  editObj!:IStudent
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const editObj=changes['stdEdit']?.currentValue as IStudent;
    this.isInEditMode=!!editObj
    if(editObj){
      this.stdForm.form.patchValue(editObj)
    }
  }
  onSubmit(){
    if(this.stdForm.valid){
      let newObj={
          ...this.stdForm.value,id:Date.now()}
        this.stdCreated.emit(newObj)
        this.stdForm.reset()

      }
    }

    updateStd(){
      let updateObj={
        ...this.stdForm.value,
      id:this.stdEdit.id}

      this.updatestd.emit(updateObj)
      this.isInEditMode=false
      this.stdForm.reset()
    }
  }

