import { FC } from "react";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";
import { SlideToOpen } from "renderer/components/SlideToOpen";
import { useNavigate } from "react-router-dom";

export const StartInteraction: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={classnames(styles["interaction-container"], "outline")}>
      <div className={classnames(styles.date, "outline")}>
        <div className={classnames(styles.month, "font-s ls-w")}>Feb</div>
        <div className={styles.year}>2023</div>
      </div>
      <div className={styles["home-details"]}>
        <div
          className={classnames(
            styles["company-name"],
            "outline font-s pl-n ls-w"
          )}
        >
          Allstate insurance company
        </div>
        <div className={classnames(styles["home-name"], "outline pl-n")}>
          Mr John Q Sample's Bunglow
        </div>
        <div className={styles["designer-details"]}>
          <div className={classnames(styles.day, "outline", "font-l")}>02</div>
          <div className={classnames(styles.spacer, "outline")} />
          <div
            className={classnames(
              styles.address,
              "outline",
              "font-xs pl-xs lh-s"
            )}
          >
            _ Lemon Design Pvt. Ltd.
            <br />
            _ F-2, Liberty Soc, Phase 2,
            <br />
            _ North Main Road
            <br />
            _ Koregaon Park. Pune - 411 001. <br />
            _ INDIA.
            <br />
          </div>
          <div className={classnames(styles.logo, "outline")}>
            <img
              className={styles["logo-icon"]}
              src="images/allstatelogoicon-01.svg"
              alt="logo-icon"
            />
          </div>
        </div>
      </div>
      <button className={classnames(styles["home-cta"], "font-n")}>
        <img
          className={styles["home-icon"]}
          src="images/homeicon-01-01.svg"
          alt="home-icon"
        />
        Home
      </button>
      <SlideToOpen
        onOpen={() => {
          navigate("/name");
        }}
      >
        <div className={classnames(styles.swiper, "font-l")}>
          Swipe to start
          <div className={styles.arrow} />
        </div>
      </SlideToOpen>
    </section>
  );
};
