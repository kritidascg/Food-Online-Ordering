import { CartItem } from "./cart-item";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 100;
  username: any;
  address:any;
}