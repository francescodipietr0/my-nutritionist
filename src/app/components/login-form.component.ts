import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MD5 } from 'crypto-js';
import { UserService } from "../services/user.service";
import { UserDto } from "../dto/dto";
import { Observable } from "rxjs";

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
  export class LoginFormComponent implements OnDestroy {
    loginForm: FormGroup ;
    users$: Observable<UserDto[]>;
    users: UserDto[];
  
    constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log(this.loginForm.value);

        const hash = MD5(this.loginForm.value.password).toString();
        this.users$ = this.userService.getAllUsers()
          .subscribe( users => this.users = users);
      }
    }

    ngOnDestroy(): void {
      this.users$.unsubscribe();
    }

    


  }
  