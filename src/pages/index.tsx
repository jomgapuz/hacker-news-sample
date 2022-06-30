import * as React from "react";
import type { NextPage } from "next";
import Story from "../components/hacker-news/Story";
import styles from "../styles/Home.module.css";
import useTopStoriesSWR from "../hooks/useTopStoriesSWR";
import Head from "next/head";
import LoadingBullets from "../components/text/LoadingBullets";

const TITLE = "10 Random Hacker News Stories";

const HomePage: NextPage = () => {
  const { data: stories } = useTopStoriesSWR();

  return (
    <div className={styles.wrap}>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <div className={styles.wrapInner}>
        <h1>{TITLE}</h1>

        {stories ? (
          stories.map((story) => <Story key={story.id} data={story} />)
        ) : (
          <p className={styles.loadText}>
            <LoadingBullets>Getting all stories</LoadingBullets>
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
