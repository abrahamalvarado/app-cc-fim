import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAlumno'
})

@Injectable()
export class SearchAlumnoPipe implements PipeTransform{
  transform(items: any, term: any):any{
    if(term === undefined){
      return items;
    }

    return items.filter(function(item){
      let result = item.group.toLowerCase().includes(term.toLowerCase());
      result += item.name.toLowerCase().includes(term.toLowerCase());
      result += item.numcontrol.toLowerCase().includes(term.toLowerCase());
      result += item.email.toLowerCase().includes(term.toLowerCase());
      result += item.class.toLowerCase().includes(term.toLowerCase());
      return result
    })
    
  }
}