import { RandomStory } from "../../pages/lib/hacker-news/getRandomStories";

export type StoryProps = {
  data: RandomStory;
};

export default function Story({ data }: StoryProps) {
  const { story, user } = data;

  return (
    <div>
      <h2>
        [{story.score}] <a href={story.url}>{story.title}</a>
      </h2>

      <p>
        [{user.karma}] {story.by}, {new Date(story.time * 1000).toUTCString()}
      </p>
    </div>
  );
}
