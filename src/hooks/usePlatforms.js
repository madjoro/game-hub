import useData from "./useData";

const usePlatforms = () => {
  return useData("/platforms/lists/parents");
};

export default usePlatforms;
