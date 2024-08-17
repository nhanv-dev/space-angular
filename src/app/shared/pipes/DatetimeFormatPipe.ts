import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTimeFormat'
})
export class DatetimeFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: Date | string | number | undefined, format: string = 'medium'): string | null {
    if (!value) {
      return null;
    }

    const dateValue = new Date(value);

    return this.datePipe.transform(dateValue, format);
  }
}
