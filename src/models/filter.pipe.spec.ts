import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
 const filterPipe= new FilterPipe();

  
   it('should be instanciated', () => {
    expect(filterPipe).toBeDefined();
  });

   it('should return the searched restaurant name', () => {
      
     const statusDisplay = filterPipe.transform([{"image":"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","businessname":"Hathaway Foods","location":"Shivaji Nagar, Pune","averagecost":500,"reviews":4.5,"phone":9856735625,"foodMenu":[{"menuId":1,"foodImages":"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","menuName":"Tandoori Momo","foodDescription":"Marinated with extra spicy tandoor masala","foodPrice":300},{"menuId":2,"foodImages":"https://images.unsplash.com/photo-1626776877921-f8d7b932bafc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80","menuName":"Steamed Momo","foodDescription":"Delicious dimsums all hot and delicious","foodPrice":150},{"menuId":3,"foodImages":"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80","menuName":"Afghani Momo","foodDescription":"Get a taste of the afghani style Momo","foodPrice":350}]}],'hathaway', 'businessname');
    expect(statusDisplay).toBe("[ Object({ image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', businessname: 'Hathaway Foods', location: 'Shivaji Nagar, Pune', averagecost: 500, reviews: 4.5, phone: 9856735625, foodMenu: [ Object({ menuId: 1, foodImages: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', menuName: 'Tandoori Momo', foodDescription: 'Marinated with extra spicy tandoor masala', foodPrice: 300 }), Object({ menuId: 2, foodImages: 'https://images.unsplash.com/photo-1626776877921-f8d7b932bafc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80', menuName: 'Steamed Momo', foodDescription: 'Delicious dimsums all hot and delicious', foodPrice: 150 }), Object({ menuId: 3, foodImages: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80', menuName: 'Afghani Momo', foodDescription: 'Get a taste of the afghani style Momo', foodPrice: 350})]})]");
    
    
    });
  });
