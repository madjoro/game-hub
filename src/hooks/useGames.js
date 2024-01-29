import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform) => {
  return useData(
    "/games",
    {
      params: {
        genres: selectedGenre === null ? null : selectedGenre.id,
        platforms: selectedPlatform === null ? null : selectedPlatform.id,
      },
    },
    [
      selectedGenre === null ? null : selectedGenre.id,
      selectedPlatform === null ? null : selectedPlatform.id,
    ]
  );
};

export default useGames;
