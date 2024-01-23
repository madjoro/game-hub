import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9e2574442f344068390c7b0f69e06b3",
  },
});
