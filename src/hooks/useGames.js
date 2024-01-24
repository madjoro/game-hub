import useData from "./useData";

const useGames = (selectedGenre) => {
  return useData(
    "/games",
    {
      params: { genres: selectedGenre === null ? null : selectedGenre.id },
    },
    selectedGenre === null ? [null] : [selectedGenre.id]
  );
};

export default useGames;
