import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent {

  @Input() listData!: User[];
  @Output() getDeletedRow = new EventEmitter<User>();
  @Output() getUpdatedRow = new EventEmitter<User>(); 
  @Output() viewSelected = new EventEmitter<User>(); 

  constructor() {
  }
  ngOnInit(): void {
  }

  updateRow(row: User) {
    this.getUpdatedRow.emit(row);
  }

  viewRow(row: User) {
    this.viewSelected.emit(row);
  }
  
  deleteRow(row : User) {
    this.getDeletedRow.emit(row);
  }

}
