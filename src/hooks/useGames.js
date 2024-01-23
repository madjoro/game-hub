import useData from "./useData";

const useGames = () => {
  return useData("/games");
};

export default useGames;
