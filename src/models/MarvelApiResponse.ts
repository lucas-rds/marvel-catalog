export interface IMarvelApiResponseData<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<T>;
}

export interface IMarvelApiResponse<T> {
  attributionHTML: string;
  attributionText: string;
  code: number;
  copyright: string;
  data: IMarvelApiResponseData<T>;
  etag: string;
  status: string;
}
