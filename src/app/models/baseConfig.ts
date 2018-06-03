import { IArticle } from './article';

export interface IBaseConfig {
  pageTitle: string;
  blogName: string;
  slogen: string;
  hostBgMainColor: string;
  postListPageSize: number;
  articles: IArticle[];
  bgUrl: string;
  bgColor: string;

  weiboLink: string;
  githubLink: string;
  mailLink: string;
  footer: string;
  footerLink: string;
  topIconUrl: string;
}
