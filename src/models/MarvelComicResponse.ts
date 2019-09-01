import { IMarvelApiResponseData } from "./MarvelApiResponse";

export interface IMarvelComicUrl {
  type: string;
  url: string;
}

export interface IMarvelComicThumbnail {
  path: string;
  extension: string;
}

export interface IMarvelCreator {
  resourceURI: string;
  name: string;
  role: string;
}

export interface IMarvelCreators {
  available: number;
  items: IMarvelCreator[];
}

export interface IMarvelComic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  urls: string[];
  thumbnail: IMarvelComicThumbnail;
  creators: IMarvelCreators;
  characters: any[];
}

export interface IMarvelApiComicResponse
  extends IMarvelApiResponseData<IMarvelComic> {}
