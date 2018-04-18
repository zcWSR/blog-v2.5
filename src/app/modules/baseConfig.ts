import { IArticle } from "./article";
import { IImg } from "./img";

export interface IBaseConfig {
  blogName: string;
  slogen: string;
  hostBgMainColor: string;
  postListPageSize: number
  articles: IArticle[];
  hostBg: IImg;
}