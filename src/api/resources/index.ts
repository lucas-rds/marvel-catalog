import { charactersEndpoint, comicsEndpoint } from "../endpoints";

export const fetchComicsByCharacterName = async (query: any): Promise<any> => {
  const { nameStartsWith, ...params } = query;

  let characterIds = [];
  if (nameStartsWith) {
    const charactersResponse = await charactersEndpoint.get({
      params: { nameStartsWith, limit: 10, offset: 0 } //limit 10 because of api response: "You may not submit more than 10 character ids."
    });
    characterIds = charactersResponse.data.data.results.map(
      (character: any) => character.id
    );
  }

  if (characterIds && characterIds.length)
    params.characters = characterIds.join(",");
  const comicsResponse = await comicsEndpoint.get({ params });

  return comicsResponse.data;
};
