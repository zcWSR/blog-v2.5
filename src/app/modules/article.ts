import { IImg } from "./img";

export interface IArticle {
  id: string;
  route: string;
  short_name: string;
  title: string;
  content: string;
  url: string;
  create_at: string;
  update_at: string;
  bg: IImg;
  bg_main_color: string;
}