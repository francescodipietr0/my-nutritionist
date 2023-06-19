import { Component, OnInit } from '@angular/core';
import { ProdottoService } from './services/prodotto-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Observable<any> | undefined;

  constructor(private prodottoService: ProdottoService) {}

  ngOnInit(): void {
    this.products = this.prodottoService.getProdotti();
    this.products.subscribe(x => console.log(x));
  }

  

}
