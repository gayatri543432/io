import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { IStudent } from 'src/app/shared/model/student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() stdArr!:IStudent[]
  @Output() editstd:EventEmitter<IStudent> =new EventEmitter<IStudent>()
  @Output() remove:EventEmitter<number> =new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }
  editStd(std:IStudent){
    this.editstd.emit(std)
  }
  removeStd(id:number){
    this.remove.emit(id)
  }
}
