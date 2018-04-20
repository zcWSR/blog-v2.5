import { IImg } from './img';

export interface IPost {
  id: string;
  title: string;
  createAt?: string;
  updateAt?: string;
  section: string;
  rest: string;
  category: string;
  labels: string[];
  bg?: IImg;
}
