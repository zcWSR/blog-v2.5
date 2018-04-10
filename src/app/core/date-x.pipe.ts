import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dateX",
  pure: true
})
export class DateXPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let date: Date;
    try {
      date = new Date(value);
    } catch (error) {
      console.error(error);
      return value;
    }
    let now = new Date();
    let time = now.getTime() - date.getTime();
    let minute = time / 1000 / 60;
    minute = Math.floor(minute);
    if (minute < 60) return minute < 1 ? `1 分钟前` : `${minute}分钟 前`;
    let hour = minute / 60;
    hour = Math.floor(hour);
    if (hour < 24) return `${hour}小时 前`;
    let day = hour / 24;
    day = Math.floor(day);
    if (day < 7) return `${day}天 前`;
    if (day === 7) return `1星期 前`;
    // let year = now.getFullYear() - date.getFullYear();
    // if (year >= 1)
    //     return `${year}年 前`;
    // let month = now.getMonth() - date.getMonth();
    // return `${month}个月 前`;
    return '';
  }
}
