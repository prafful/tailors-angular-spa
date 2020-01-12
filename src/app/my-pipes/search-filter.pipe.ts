import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    if(args === undefined){
      return value
    }

    return value.filter(function(v){
      console.log("From searchFilter: ")
      console.log(v)
      return v.shopName.toLowerCase().includes(args.toLowerCase())
    })

  }

}
