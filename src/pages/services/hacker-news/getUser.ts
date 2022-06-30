import axios from "axios";

export type GetUserResult = {
  karma: number;
  [key: string]: any;
};

export default async function getUser(id: number | string) {
  return axios
    .get<GetUserResult>(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
    .then((result) => result.data);
}
