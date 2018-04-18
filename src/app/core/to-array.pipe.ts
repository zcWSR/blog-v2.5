import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {
  transform(values: {}, args?: any): any {
    return Object.keys(values).map(key => {
      return { key, value: values[key] };
    });
  }
}
