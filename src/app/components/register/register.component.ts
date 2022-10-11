import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authForm!: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.authForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: [''],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.authForm.controls;
  }

  registerUser() {
    this.isSubmitted = true;
    if (this.authForm.invalid) {
      return;
    }
    this.authService.signUp(this.authForm.value).subscribe((res) => {
      if (res.result) {
        this.authForm.reset();
        this.router.navigateByUrl('/home');
      }
    });
  }

}
