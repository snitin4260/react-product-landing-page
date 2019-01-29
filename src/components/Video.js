import React from "react";
import Iframe from "./Iframe";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <section className={styles.video} id="video">
      <h2>Video</h2>
      <div className={styles.video_item}>
        <Iframe
          src="https://www.youtube.com/embed/DLBxC8uGPu4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="angry books"
        />
      </div>
    </section>
  );
};

export default Video;
