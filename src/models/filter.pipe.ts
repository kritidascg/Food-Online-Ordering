import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRestaurants'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName:string): any[] {
    const result:any =[];
    
    if(!value || filterString==='' || propName ===''){
      
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
      });

      console.log(value)
    console.log( filterString)
    console.log(propName);
    console.log(result);
    return result;
  }

}