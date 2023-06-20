import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ProductDto } from "../dto/dto";
import { Observable } from "rxjs";

@Component({
    selector: 'mynt-home-page',
    template: `
        <div class="header"></div>
        <ng-container *ngIf="products$ | async as products">
          <mynt-products-chip-list [productsChipList]="products"></mynt-products-chip-list>
        </ng-container>
  `,
    styles: [''],
  })
  export class HomePage {

    products$: Observable<ProductDto[]>;

    constructor(private productService: ProductService) {
      this.products$ = productService.getAllProducts();
    }

  }
  