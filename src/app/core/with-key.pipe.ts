import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withKey'
})
export class WithKeyPipe implements PipeTransform {

  transform(values: any[], args?: any): any {
    return values.map((value, key) => {
      return { key, value };
    });
  }

}
