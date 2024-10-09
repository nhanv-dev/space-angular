import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateTimeFormat'
})
export class DatetimeFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value: Date | string | number | undefined, format: string = 'medium'): string | null {
    if (!value) return '';

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return '';
    }

    const day = this.padToTwoDigits(date.getDate());
    const month = this.padToTwoDigits(date.getMonth() + 1); // Months are 0-based
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = this.padToTwoDigits(date.getMinutes());
    const seconds = this.padToTwoDigits(date.getSeconds());

    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = this.padToTwoDigits(hours % 12 || 12); // Convert to 12-hour format

    return `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${amPm}`;
  }

  private padToTwoDigits(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
