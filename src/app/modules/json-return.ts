export interface IJsonReturn <DataType> {
  data: DataType;
  errmsg?: string;
  errcode: number,
  ret: boolean,
  ver: string
}