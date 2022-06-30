import axios from "axios";

export type GetTopStoriesIdsResult = number[];

export default async function getTopStoriesIds() {
  return axios
    .get<GetTopStoriesIdsResult>(
      "https://hacker-news.firebaseio.com/v0/topstories.json"
    )
    .then((result) => result.data);
}
