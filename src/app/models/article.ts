import { IImg } from './img';

export interface IArticle {
  id?: number;
  route: string;
  shortName: string;
  title?: string;
  content?: string;
  url?: string;
  createAt?: string;
  updateAt?: string;
  bg?: IImg;
  bg_main_color?: string;
}
