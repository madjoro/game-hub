import useData from "./useData";

const useGames = (selectedGenre) => {
  return selectedGenre == null
    ? useData("/games")
    : useData("/games", { params: { genres: [selectedGenre.id] } }, [
        selectedGenre.id,
      ]);
};

export default useGames;
