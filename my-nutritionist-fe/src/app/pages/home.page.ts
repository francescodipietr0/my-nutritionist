import { Component } from "@angular/core";
import { ProductService } from "../services/product.service";
import { ProductDto } from "../dto/dto";
import { Observable, map } from "rxjs";

@Component({
    selector: 'mynt-home-page',
    template: `
        <div class="header"></div>
        <div class="container">
          <ng-container *ngIf="products && products.length">
            <table mat-table [dataSource]="products" class="mat-elevation-z8">

              <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef> Name </th>
                <td mat-cell *matCellDef="let element"> {{element.name}} </td>
              </ng-container>

              <ng-container matColumnDef="stock">
                <th mat-header-cell *matHeaderCellDef> Stock </th>
                <td
                  mat-cell *matCellDef="let element"
                > {{element.stock}} </td>
              </ng-container>

              <ng-container matColumnDef="status">
                <th mat-header-cell *matHeaderCellDef> Status </th>
                <td mat-cell *matCellDef="let element" [class]="element.status">
                  <img [src]="productService.getProductIconStatus(element.status)" alt="Product status" />
                </td>
              </ng-container>


              <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
              <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
          </ng-container>

          <!-- vecchia gestione
          <ng-container *ngIf="products$ | async as products">
            <mynt-products-chip-list [productsChipList]="products" #chipList></mynt-products-chip-list>
            <button mat-raised-button color="primary" type="button" (click)="handleButton(chipList.productsToDecrease)">Submit</button>
          </ng-container> -->
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

    displayedColumns: string[] = ['name', 'stock', 'status'];
    products: ProductDto[] = [];

    constructor(public productService: ProductService) {
      productService.getAllProducts()
        .subscribe(products => {
          this.products = products;
          this.products = productService.reorderProducts(this.products);
        });
    }




    // vecchia gestione
    /*
    handleButton(productsToDecrease: number[]) {
      console.log("selezionati: ", productsToDecrease);
      productsToDecrease.forEach(product => {
        
      });
    }
    */

  }
  