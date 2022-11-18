import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  preco = 0;
  amount = 0;

  incressAmount(precoProduto): void {
    this.preco = this.preco + precoProduto;
    this.amount = this.amount + 1;
  }

  removeAmount(precoProduto): void {
    this.preco = this.preco - precoProduto;
    this.amount = this.amount - 1;
  }
}
