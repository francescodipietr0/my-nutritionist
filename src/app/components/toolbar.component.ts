import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'mynt-toolbar',
    template: `
        <mat-toolbar color="primary">
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
                <mat-icon>menu</mat-icon>
            </button>
            <span>MY NUTRITIONIST</span>
            <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
                <mat-icon>share</mat-icon>
            </button>
        </mat-toolbar>
  `,
    styles: [''],
  })
  export class ToolbarComponent {

  }
  