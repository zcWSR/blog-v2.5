import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withKey'
})
export class WithKeyPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    let result = [];
    for (let key in values) {
      result.push({ key, value: values[key] });
    }
    return result;
  }

}
