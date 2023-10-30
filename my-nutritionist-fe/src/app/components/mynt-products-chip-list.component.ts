import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductDto } from "../dto/dto";

@Component({
    selector: 'mynt-products-chip-list',
    template: `
      <ng-container *ngIf="productsChipList.length">
        <mat-chip-listbox multiple>
          <mat-chip-option
            *ngFor="let product of productsChipList"
            (click)="handleClick(product.id)"
          >{{ product.name }}</mat-chip-option>
        </mat-chip-listbox>
      </ng-container>
  `,
    styles: [``],
  })
  export class MyntProductsChipListComponent {
    
    @Input() productsChipList: ProductDto[] = [];

    // product ids whose quantity has to be decreased (because eaten)
    public productsToDecrease: number[] = [];

    handleClick(id: number) {
      const index = this.productsToDecrease.indexOf(id);
      index > -1
        ? this.productsToDecrease.splice(index, 1)
        : this.productsToDecrease.push(id)
    }

  }
  