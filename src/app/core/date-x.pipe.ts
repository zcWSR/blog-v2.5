import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateX',
  pure: true
})
export class DateXPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let momentDate;
    let date: Date;
    try {
      momentDate = moment(value);
      date = momentDate.toDate();
    } catch (error) {
      console.error(error);
      return value;
    }
    const now = new Date();
    const time = now.getTime() - date.getTime();
    let minute = time / 1000 / 60;
    minute = Math.floor(minute);
    if (minute < 60) { return minute < 1 ? `1 分钟前` : `${minute}分钟 前`; }
    let hour = minute / 60;
    hour = Math.floor(hour);
    if (hour < 24) { return `${hour}小时 前`; }
    let day = hour / 24;
    day = Math.floor(day);
    if (day < 7) { return `${day}天 前`; }
    if (day === 7) { return `1星期 前`; }
    // let year = now.getFullYear() - date.getFullYear();
    // if (year >= 1)
    //     return `${year}年 前`;
    // let month = now.getMonth() - date.getMonth();
    // return `${month}个月 前`;
    if (args && args[0]) {
      return momentDate.format('YYYY年MM月DD日');
    } else {
      return momentDate.format('YYYY年MM月DD日 HH:mm:ss');
    }
  }
}
