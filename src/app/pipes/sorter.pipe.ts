import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    }

    let sortedValues = value.sort((a: any, b: any) => {
      if (typeof (a[key] && b[key]) == 'number') {
        return a[key] - b[key];                 // Ascending...
      }
      else {
        a[key] = ('' + a[key]);
        b[key] = ('' + b[key]);
        return a[key].localeCompare(b[key]);    // Ascending...
      }
    });

    return sortedValues;
  }
}
