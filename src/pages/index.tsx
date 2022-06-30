import * as React from "react";
import type { NextPage } from "next";
import Story from "../components/hacker-news/Story";
import styles from "../styles/Home.module.css";
import useTopStoriesSWR from "../hooks/useTopStoriesSWR";

const Home: NextPage = () => {
  const { data: stories } = useTopStoriesSWR();

  return (
    <div className={styles.wrap}>
      <div className={styles.wrapInner}>
        <h1>10 Random Hacker News Stories</h1>

        {stories ? (
          stories.map((story) => <Story key={story.id} data={story} />)
        ) : (
          <p>Getting all stories...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
