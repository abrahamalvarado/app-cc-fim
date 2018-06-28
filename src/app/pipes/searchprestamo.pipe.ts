import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPrestamo'
})

@Injectable()
export class SearchPrestamoPipe implements PipeTransform{
  transform(items: any, term: any):any{
    if(term === undefined){
      return items;
    }

    return items.filter(function(item){
      let result = item.equipment.toLowerCase().includes(term.toLowerCase());
      result += item.student.toLowerCase().includes(term.toLowerCase());
      result += item.status.toLowerCase().includes(term.toLowerCase());
      return result
    })
    
  }
}