import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MenuService } from "../services/menu.service";
import { Observable, Subscription } from "rxjs";

@Component({
    selector: 'mynt-toolbar',
    template: `
        <mat-toolbar color="primary">
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon" (click)="handleClick()">
                <mat-icon>menu</mat-icon>
            </button>
            <span>{{ title }}</span>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
                <mat-icon>share</mat-icon>
            </button>
        </mat-toolbar>
  `,
    styles: [''],
  })
  export class MyntToolbarComponent {

    @Input() title = "MY NUTRITIONIST";
    isOpen: boolean | null = null;
    menuSubscription: Subscription | null = null;

    constructor(private menuService: MenuService) {}

    ngOnInit() {
      this.menuSubscription = this.menuService.menu$.subscribe(isOpen => {
        this.isOpen = isOpen;
      });
    }
  
    ngOnDestroy() {
      if (this.menuSubscription) {
        this.menuSubscription.unsubscribe();
      }
    }

    handleClick() {
      this.menuService.changeMenuStatus(!this.isOpen)
    }

  }
  