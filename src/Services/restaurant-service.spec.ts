import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RestaurantService } from './restaurant-service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let http:HttpClient;
  let httpController: HttpTestingController;
  let POSTS=[
    {
      "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "businessname": "Hathaway Foods",
      "location": "Shivaji Nagar, Pune",
      "averagecost": 500,
      "reviews": 4.5,
      "phone": 9856735625,
      "foodMenu":
      [{
      "menuId":1,
      "foodImages": "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
      "menuName": "Tandoori Momo",
      "foodDescription": "Marinated with extra spicy tandoor masala",
      "foodPrice": 300     
       }, 
       {
        "menuId":2,
       "foodImages":"https://images.unsplash.com/photo-1626776877921-f8d7b932bafc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
       "menuName":"Steamed Momo",
       "foodDescription":  "Delicious dimsums all hot and delicious",
       "foodPrice":150
       },
       {
      "menuId":3,
       "foodImages":"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
       "menuName": "Afghani Momo",
       "foodDescription":"Get a taste of the afghani style Momo",
       "foodPrice":350
       }]
  },
  
  {
      "image": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      "businessname": "Domino's Pizza",
      "location": "Wakad, Pune",
      "averagecost": 700,
      "reviews": 4.2,
      "phone": 9856735654,
      "foodMenu":
      [{
      "menuId":4,
      "foodImages": "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "menuName":"Herb Pizza",
      "foodDescription": "Pizza dough brushed with garlic oil then topped with mozarella cheese and fresh herbs", 
      "foodPrice": 250
       },
       {
       "menuId":5,
       "foodImages":"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       "menuName":"Chicken Sausage Pizza",
       "foodDescription":   "Medium-sized pizza served with hot and spicy sausages",
       "foodPrice":380
       },
       {
       "menuId":6,
       "foodImages":"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
       "menuName":"Chicken Keema Pizza",
       "foodDescription": "Pizza with perfectly minced chicken tossed in spices",
       "foodPrice":690
       }]
  },
  {
      "image": "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=724&q=80",
      "businessname": "Organic Kitchen",
      "location": "Koregaon Park, Pune",
      "averagecost": 1000,
      "reviews": 5.0,
      "phone": 9356715625,
      "foodMenu": [
          {
          "menuId":7,
          "foodImages": "https://images.unsplash.com/photo-1505714197102-6ae95091ed70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          "menuName": "Chicken Salad",
          "foodDescription": "Minced chicken tossed in herbs",
          "foodPrice":550
           },
          {
          "menuId":8,
          "foodImages": "https://media.istockphoto.com/photos/caesar-salad-vegetable-salad-with-roast-chicken-meat-on-wooden-picture-id1264431895?s=612x612",
          "menuName": "Tofu Rice",
          "foodDescription": "Perfectly steamed rice with tofu",
          "foodPrice":600
          },
          {
          "menuId":9,
          "foodImages": "https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          "menuName": "Vegan Mac and Cheese",
          "foodDescription": "Purely vegan cheese used",
          "foodPrice":300   
  
           }]
          }
  ];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RestaurantService],
    });
    service = TestBed.inject(RestaurantService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });
  
  describe('getRestaurantDetails()', () => {
    it('should return details when getRestaurantDetails() is called', (done: DoneFn) => {
      service.getRestaurantDetails().subscribe((data) => {
        expect(data).toEqual(POSTS);
        done();
      });

       });


  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
    
  });

  
})
