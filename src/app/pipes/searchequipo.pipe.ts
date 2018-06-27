import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEquipo'
})

@Injectable()
export class SearchEquipoPipe implements PipeTransform{
  transform(items: any, term: any):any{
    if(term === undefined){
      return items;
    }

    return items.filter(function(item){
      let result = item.name.toLowerCase().includes(term.toLowerCase());
      result += item.brand.toLowerCase().includes(term.toLowerCase());
      result += item.model.toLowerCase().includes(term.toLowerCase());
      result += item.type.toLowerCase().includes(term.toLowerCase());
      result += item.place.toLowerCase().includes(term.toLowerCase());
      result += item.status.toLowerCase().includes(term.toLowerCase());
      return result
    })
    
  }
}