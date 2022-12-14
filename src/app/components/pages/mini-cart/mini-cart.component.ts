import { Component, OnInit } from '@angular/core';
import { ILaptops } from 'src/app/interfaces/laptos-interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss']
})
export class MiniCartComponent implements OnInit {
  laptops:ILaptops[]=[];
  total:number=0;
  constructor(private cartService: CartService) {
   }

  ngOnInit(): void {
    this.cartService.laptops.subscribe(d=>this.laptops=d)
    this.cartService.sumSubject.subscribe(d=>this.total=d)
  }

}
