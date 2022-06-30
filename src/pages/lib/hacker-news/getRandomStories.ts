import getStory, { GetStoryResult } from "../../services/hacker-news/getStory";
import getTopStoriesIds from "../../services/hacker-news/getTopStoriesIds";
import getUser, { GetUserResult } from "../../services/hacker-news/getUser";
import { getRandomElements } from "../primitives/array.lib";

export type RandomStory = {
  id: number;
  story: GetStoryResult;
  user: GetUserResult;
};

export default async function getRandomStories(
  count = 10
): Promise<RandomStory[]> {
  const ids = await getTopStoriesIds();

  const { result: randomIds } = getRandomElements(ids, count);

  const randomStory = await Promise.all(
    randomIds.map(async (id) => {
      const story = await getStory(id);
      const user = await getUser(story.by);

      return {
        id,
        story,
        user
      };
    })
  );

  randomStory
    .sort((a, b) => a.story.time - b.story.time)
    .sort((a, b) => a.story.score - b.story.score);

  return randomStory;
}
