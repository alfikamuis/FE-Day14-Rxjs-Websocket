import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: string | null;
  nama!: string | null;
  kota!: string | null;
  
  @Input() selectedData!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.nama = this.route.snapshot.paramMap.get('nama');
    this.kota = this.route.snapshot.paramMap.get('kota');
  }

  backToPassanger(){
    this.router.navigate(['/dashboard']);
  }

}
