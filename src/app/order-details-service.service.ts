import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsServiceService {

  constructor() { }

  //restaurantdetails
  RestaurantDetails = [
    {
      reviews: 50,
      parkinglot: false,
      location: "Abraham Adesanya",
      phone: "08145290260",
      averagecost: 700,
      image: "https://res.cloudinary.com/jobizil/image/upload/v1603060257/images/restaurant/egbjeb2qrtabqufx9yen.jpg",
      imageId: "images/restaurant/egbjeb2qrtabqufx9yen",
      businessname: "FoodFusion",
      menu: "5f5eccf4e923d0aca3e7d447",
      foodMenu: []
    },
    {
      reviews: 48,
      parkinglot: false,
      location: "Abraham Adesanya",
      phone: "08145290260",
      averagecost: 700,
      image: "https://res.cloudinary.com/jobizil/image/upload/v1603060323/images/restaurant/bzciailqusg6mp73j428.jpg",
      imageId: "images/restaurant/bzciailqusg6mp73j428",
      businessname: "Hathaway Foods",
      menu: "5f5eccf4e923d0aca3e7d44c",
      foodMenu: [],
    },
    {
      reviews: 42,
     parkinglot: false,
      location: "Badore",
      phone: "08145290260",
      averagecost: 700,
      image: "https://res.cloudinary.com/jobizil/image/upload/v1603060357/images/restaurant/kzcinie4fbphqtbizbpd.jpg",
      imageId: "images/restaurant/kzcinie4fbphqtbizbpd",
      businessname: "Sugarbee Kitchen",
      menu: "5f5eccf4e923d0aca3e7d449",
      foodMenu: []
    },
    {
      reviews: 34,
      parkinglot: false,
      location: "Badore",
      phone: "08145290260",
      averagecost: 700,
      image: "https://res.cloudinary.com/jobizil/image/upload/v1603060385/images/restaurant/iyped2pb5clel4fu1wu6.jpg",
      imageId: "images/restaurant/iyped2pb5clel4fu1wu6",
      businessname: "Pot a Soup Kitchen",
      menu: "5f5eccf4e923d0aca3e7d449",
      foodMenu: []
      
    },
    {
      reviews: 34,
      parkinglot: false,
      location: "Ajah",
      phone: "08145290260",
      averagecost: 700,
      image: "https://res.cloudinary.com/jobizil/image/upload/v1603060411/images/restaurant/pmmgqv7enms4sf5pqhkd.jpg",
      imageId: "images/restaurant/pmmgqv7enms4sf5pqhkd",
      businessname: "AreaChops",
      menu: "5f5eccf4e923d0aca3e7d44a",
      foodMenu: []
    },
    
  ]

  // fooddetails 

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala paneer.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo ice cream",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]





}
