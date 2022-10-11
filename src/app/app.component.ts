import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{

  title = 'crud-child-parent';

  constructor(private authService: AuthService, private router:Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  isLogin!: boolean;
  buttonLogout!: boolean

  ngOnInit(): void {
    this.isLogin = false;
    this.buttonLogout = false;
  }

  checkLogin(): void {
    this.isLogin = this.authService.isLoggedIn;
    this.buttonLogout = true;
  }

  logout(){
    this.authService.doLogout();
    this.router.navigateByUrl('/home');
    this.buttonLogout = false;
  }
}
