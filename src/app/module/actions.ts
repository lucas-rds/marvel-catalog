import { ActionContext } from "vuex";
import IAppState from "@/models/AppState";
import { IMarvelApiComicResponse } from "@/models/MarvelComicResponse";
import { fetchComicsByCharacterName } from "@/api/resources";
import { comicsByIdEndpoint } from "@/api/endpoints";

export default {
  showLoading({ commit }: ActionContext<IAppState, any>) {
    commit("toggleLoading", true);
  },
  hideLoading({ commit }: ActionContext<IAppState, any>) {
    commit("toggleLoading", false);
  },
  async fetchComics(
    { dispatch }: ActionContext<IAppState, any>,
    query: object
  ): Promise<IMarvelApiComicResponse> {
    dispatch("showLoading");
    try {
      const comics = await fetchComicsByCharacterName(query);
      return comics;
    } catch (err) {
      throw err;
    } finally {
      dispatch("hideLoading");
    }
  },
  async fetchComicById(
    { dispatch }: ActionContext<IAppState, any>,
    comicId: string
  ): Promise<IMarvelApiComicResponse> {
    dispatch("showLoading");
    try {
      const comicsResponse = await comicsByIdEndpoint.get({
        uriParams: { comicId }
      });
      return comicsResponse.data.data.results[0];
    } catch (err) {
      throw err;
    } finally {
      dispatch("hideLoading");
    }
  }
};
