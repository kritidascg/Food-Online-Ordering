import { IMenuDetails } from "./menuDetails";

export class CartItem{
    constructor(public menudetails : IMenuDetails){ }
    quantity:number = 1 ;
    }