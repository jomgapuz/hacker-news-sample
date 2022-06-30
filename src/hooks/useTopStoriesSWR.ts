import useSWR from "swr";
import getRandomStories from "../lib/hacker-news/getRandomStories";

export const TOP_STORIES_SWR_KEY = "@topStories";

export default function useTopStoriesSWR(count = 10) {
  return useSWR(
    [TOP_STORIES_SWR_KEY, count],
    async (key, countLocal) => getRandomStories(countLocal),
    { dedupingInterval: 5 * 60 * 1000 }
  );
}
