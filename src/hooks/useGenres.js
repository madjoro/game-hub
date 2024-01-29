import genres from "../data/genres";
const useGenres = () => {
  return { data: genres, isLoading: false, error: null }; //useData("/genres");
};

export default useGenres;
