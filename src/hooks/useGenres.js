import useData from "./useData";

const useGenres = () => {
  return useData("/genres");
};

export default useGenres;
