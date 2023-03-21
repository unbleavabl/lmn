import { FC } from "react";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";
import { SlideToOpen } from "renderer/components/SlideToOpen";
import { useNavigate } from "react-router-dom";

export const StartInteraction: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={classnames(styles["interaction-container"])}>
      <div className={classnames(styles.spacer, "outline")} />
      <div className={classnames(styles["logo-name-wrapper"], "outline")}>
        <div className={classnames(styles["name-wrapper"], "outline font-n")}>
          Gloria & Joe's Bunglow
        </div>
        <div className={styles["logo-wrapper"]}>
          <img
            className={styles["logo"]}
            src="images/allstatelogo-01.svg"
            alt="home-icon"
          />
        </div>
      </div>
      <button className={classnames(styles["home-cta"], "font-s outline")}>
        <img
          className={styles["home-icon"]}
          src="images/homeicon-01-01.svg"
          alt="home-icon"
        />
        Home
      </button>
      <SlideToOpen
        className={"outline"}
        onOpen={() => {
          navigate("/main");
        }}
      >
        <div className={classnames(styles.swiper, "font-l")}>
          Slide to start
          <div className={styles.arrow} />
        </div>
      </SlideToOpen>
    </section>
  );
};
