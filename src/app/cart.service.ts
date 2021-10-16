import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];
  sum: number=0;
constructor() { }
addToCart(offer: any) {
this.items.push(offer);
}
getItems() {
return this.items;
}
clearCart() {
this.items = [];
return this.items;
}

getSum(){
  for (var val of this.items) {
   this.sum = this.sum + val.price;
  }
  return this.sum;
}

}
