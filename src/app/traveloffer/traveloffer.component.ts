import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

import { offerlist } from '../offerlist';

@Component({
  selector: 'app-traveloffer',
  templateUrl: './traveloffer.component.html',
  styleUrls: ['./traveloffer.component.css']
})
export class TravelofferComponent implements OnInit {

  offerlist = offerlist;

  constructor(private cartService: CartService) { }

  addToCart(offer: any){
    window.alert('Your travel has been added to the cart!');
    this.cartService.addToCart(offer);
  }

  ngOnInit(): void {
  }

}
