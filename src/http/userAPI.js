import { $host } from "./index";

export const fetchUser = async (name) => {
  const { data } = await $host.get("users/" + name);
  return data;
};

export const fetchRepositories = async (owner, per_page, page) => {
  const { data } = await $host.get("users/" + owner + "/repos", {
    params: {
      per_page,
      page,
    },
  });
  return data;
};
