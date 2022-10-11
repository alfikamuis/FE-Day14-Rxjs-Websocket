import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{

  public newData: User[] = [];

  selectData: User | null = null;
  updateData: User | null = null;
  isAdd: boolean = true;
  
  subs!: Subscription | any;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subs = null;
  }

  ngOnInit(): void {
    this.dataService.getList().subscribe(data => {
      this.newData = data;
    });
  }

  addRow(row : User){
    row = this.dataService.add(row,this.newData);
    this.newData.push(row);
  }

  onUpdateData(row: User) {
    this.newData = this.dataService.update(row,this.newData);
    this.updateData = null;
    this.isAdd =true;
  }

  updateRow(row: User){
    this.isAdd = false;
    this.updateData = row;
    this.selectData = null;
  }

  viewRow(row: User){
    this.isAdd = true;
    this.selectData = row;
    this.updateData = null;
    this.dataService.view(row);
  }
  
  deleteRow(row: User){
    this.dataService.delete(row,this.newData);
  }

}
