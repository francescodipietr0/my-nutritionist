import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductDto } from "../dto/dto";

@Component({
    selector: 'mynt-products-chip-list',
    template: `
      <ng-container *ngIf="productsChipList.length">
        <mat-chip-listbox multiple>
          <mat-chip-option *ngFor="let product of productsChipList">{{ product.name }}</mat-chip-option>
        </mat-chip-listbox>
      </ng-container>
  `,
    styles: [''],
  })
  export class ProductsChipListComponent {
    
    @Input() productsChipList: ProductDto[] = [];

  }
  