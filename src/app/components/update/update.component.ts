import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  nama!: string ;
  kota!: string ;

  @Input() update!: User;
  @Output() onUpdate = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
    this.id = this.update.id;
    this.nama = this.update.nama;
    this.kota = this.update.kota;
  }

  submitValues() {
    let obj: User = {
      id : this.update.id,
      nama: this.nama,
      kota: this.kota
    }
    this.onUpdate.emit(obj);
  }

}
