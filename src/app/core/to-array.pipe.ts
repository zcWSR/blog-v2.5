import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform(values: {}, args?: any): any {
    let result = [];
    for (let key in Object.keys(values)) {
      result.push({ key, value: values[key] });
    }
    return result;
  }

}
