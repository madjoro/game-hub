import useData from "./useData";

const useGames = (gameQuery) => {
  return useData(
    "/games",
    {
      params: {
        genres: gameQuery.genre === null ? null : gameQuery.genre.id,
        platforms: gameQuery.platform === null ? null : gameQuery.platform.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [
      gameQuery.genre === null ? null : gameQuery.genre.id,
      gameQuery.platform === null ? null : gameQuery.platform.id,
      gameQuery.sortOrder,
    ]
  );
};

export default useGames;
