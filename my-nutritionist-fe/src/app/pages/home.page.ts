import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ProductDto } from "../dto/dto";
import { Observable } from "rxjs";

@Component({
    selector: 'mynt-home-page',
    template: `
        <div class="header"></div>
        <div class="container">
          <ng-container *ngIf="products$ | async as products">
            <mynt-products-chip-list [productsChipList]="products" #chipList></mynt-products-chip-list>
            <button mat-raised-button color="primary" type="button" (click)="handleButton(chipList.productsToDecrease)">Submit</button>
          </ng-container>
        </div>
  `,
    styles: [`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
    `]
  })
  export class HomePage {

    products$: Observable<ProductDto[]>;

    constructor(private productService: ProductService) {
      this.products$ = productService.getAllProducts();
    }

    handleButton(productsToDecrease: number[]) {
      debugger;
    }

  }
  