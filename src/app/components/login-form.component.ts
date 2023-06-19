import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'mynt-login-form',
    template: `
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field>
                <mat-label>Username</mat-label>
                <input matInput formControlName="username">
            </mat-form-field>

            <mat-form-field>
                <mat-label>Password</mat-label>
                <input matInput type="password" formControlName="password">
            </mat-form-field>

            <button mat-raised-button color="primary" type="submit">Submit</button>
        </form>
  `,
    styles: [''],
  })
  export class LoginFormComponent {
    loginForm: FormGroup ;
  
    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);
        // TODO: hash della password + chiamata DB
      }
    }
  }
  