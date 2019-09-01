import EndpointFactory from "axios-endpoints";
import { api } from "../api";

const Endpoint = EndpointFactory(api);

const characters = "/characters";
export const charactersEndpoint = new Endpoint(() => `${characters}`);

const comics = "/comics";
export const comicsEndpoint = new Endpoint<{ comicId: string }>(
  () => `${comics}`
);

export const comicsByIdEndpoint = new Endpoint<{ comicId: string }>(
  ({ comicId = "" }) => `${comics}/${comicId}`
);
