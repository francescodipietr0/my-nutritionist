import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MD5 } from 'crypto-js';
import { UserService } from "../services/user.service";
import { UserDto } from "../dto/dto";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

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
    // TODO: vanno bene gli undefined?
    users$: Observable<UserDto[]> | undefined;
    users: UserDto[] | undefined;

    usersSubscription: Subscription = new Subscription();

  
    constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router,
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        const typedUsername = this.loginForm.value.username;
        const typedPassword = this.loginForm.value.password;

        const hashedPassword = MD5(typedPassword).toString();
        this.users$ = this.userService.getAllUsers();
        this.usersSubscription = this.users$
          .subscribe(users => {
            const existingUser = users.find(user => user.username === typedUsername);
            if(existingUser && hashedPassword === existingUser.password) {
              this.router.navigate(['/home']);
            } else {
              // TODO: handle
            }
          });
      }
    }

    ngOnDestroy(): void {
      this.usersSubscription.unsubscribe();
    }


    // TOOD: gestire le rotte autenticate:
    // ho creato un form di login nella mia applicazione che confronta i dati inseriti con quelli presenti nel DB. se matchano, mi sposto nella pagina "/home". 
    // il problema è che chiunque, modificando la url da "localhost:4200" a "localhost:4200/home" può accedere alla home senza loggarsi.
    // come posso far raggiungere "/home" solo se si è effettivamente loggati?

  }
  