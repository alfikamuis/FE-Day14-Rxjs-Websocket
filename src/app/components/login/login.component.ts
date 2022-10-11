import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted  =  false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.authForm  =  this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get formControls() { 
    return this.authForm.controls; 
  }

  signIn(){
    this.isSubmitted = true;
    if(this.authForm.invalid){
      return;
    }
    this.authService.signIn(this.authForm.value);
    this.router.navigateByUrl('/dashboard');
  }

}
