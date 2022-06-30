import axios from "axios";

export type GetStoryResult = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
};

export default async function getStory(id: number) {
  return axios
    .get<GetStoryResult>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    )
    .then((result) => result.data);
}
