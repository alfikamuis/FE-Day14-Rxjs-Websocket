import { Component, OnInit, ViewChild,Output,EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  id!: number;
  nama!: string;
  kota!: string;
  
  @ViewChild('myForm', { static: false }) MyForm!: NgForm;
  @Output() getAddedRow = new EventEmitter<User>();

  constructor() {
  }
  
  ngOnInit(): void {
    this.id = 0;
  }

  submitValues() {
    let sendObj = {
      id: this.id,
      nama: this.nama,
      kota: this.kota,
    };
    this.getAddedRow.emit(sendObj);
    this.MyForm.reset();
  }
}
