import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MenuService } from "../services/menu.service";

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

    isOpen = false;
    @Input() title = "MY NUTRITIONIST";
    
    constructor(private menuService: MenuService) {}

    handleClick() {
      this.menuService.changeMenuStatus(!this.isOpen)
      this.isOpen = !this.isOpen;
    }

  }
  