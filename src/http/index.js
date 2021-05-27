import axios from "axios";

const $host = axios.create({
  baseURL: "https://api.github.com/",
});

export { $host };
