import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductDto } from "../dto/dto";

@Component({
    selector: 'mynt-products-chip-list',
    template: `
      <ng-container *ngIf="productsChipList.length">
        <mat-chip-listbox multiple>
          <mat-chip-option
            #chip
            *ngFor="let product of productsChipList"
            (click)="chip.highlighted ? null : null"
          >{{ product.name }}</mat-chip-option>
        </mat-chip-listbox>
      </ng-container>
  `,
    styles: [''],
  })
  export class ProductsChipListComponent {
    
    @Input() productsChipList: ProductDto[] = [];

    // products whose quantity has to be decreased (because eaten)
    productsToDecrease: number[] = [];

  }
  