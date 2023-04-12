import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f72a9d6763154b51a9348bcffa83dc25",
  },
});
