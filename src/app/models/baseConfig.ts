import { IArticle } from './article';

export interface IBaseConfig {
  blogName: string;
  slogen: string;
  hostBgMainColor: string;
  postListPageSize: number;
  articles: IArticle[];
  bgUrl: string;
  bgColor: string;
}
