import useData from "./useData";

const useGames = (gameQuery) => {
  return useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre === null ? null : gameQuery.genre.id,
        platforms: gameQuery.platform === null ? null : gameQuery.platform.id,
      },
    },
    [
      gameQuery.genre === null ? null : gameQuery.genre.id,
      gameQuery.platform === null ? null : gameQuery.platform.id,
    ]
  );
};

export default useGames;
