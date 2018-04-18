import { IPost } from './post';

export interface IPostList {
  list: IPost[];
  totalCount: number;
  curPage: number;
  pageSize: number;
}
