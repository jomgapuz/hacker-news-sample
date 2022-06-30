import Image from "next/image";
import { RandomStory } from "../../lib/hacker-news/getRandomStories";
import styles from "./Story.module.css";
import avatarJpg from "../../../assets/image/avatar-6c5702f407a9f1693ac4e51e1d9d2e9a.jpg";

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

        <div className={styles.meta}>
          <div>
            <div className={styles.authorImageWrap}>
              <Image
                className={styles.authorImage}
                src={avatarJpg}
                height={32}
                width={32}
                alt="profile picture"
              />
            </div>
          </div>
          <div>
            {story.by}{" "}
            <span className={styles.karma} title="User's Karma">
              {user.karma}
            </span>{" "}
            , {new Date(story.time * 1000).toUTCString()}
          </div>
        </div>
      </div>
    </div>
  );
}
