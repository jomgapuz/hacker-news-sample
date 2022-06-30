import { RandomStory } from "../../pages/lib/hacker-news/getRandomStories";
import styles from "./Story.module.css";

export type StoryProps = {
  data: RandomStory;
};

export default function Story({ data }: StoryProps) {
  const { story, user } = data;

  return (
    <div className={styles.Story}>
      <div className={styles.scoreWrap}>
        <span className={styles.score}>{story.score}</span>
      </div>

      <div>
        <h2>
          <a href={story.url} target="_blank" rel="noreferrer">
            {story.title}
          </a>
        </h2>

        <p className={styles.meta}>
          {story.by}{" "}
          <span className={styles.karma} title="User's Karma">
            {user.karma}
          </span>{" "}
          , {new Date(story.time * 1000).toUTCString()}
        </p>
      </div>
    </div>
  );
}
