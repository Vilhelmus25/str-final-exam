import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, key: string = 'name', filterText: string | number): any[] | null {
    if (!Array.isArray(value) || !key || !filterText) {
      return value;
    }

    filterText = typeof filterText !== 'number' ? ('' + filterText).toLowerCase() : filterText;

    return value.filter(item => {
      return ('' + item[key]).toLowerCase().includes((filterText as string));
    });
  }

}
