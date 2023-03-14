import { FC } from "react";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";

export type IconLabelProps = {
  image: string;
  label: string;
};

export const IconLabel: FC<IconLabelProps> = ({ image, label }) => {
  return (
    <div className={styles.icon}>
      <img className={styles.logo} src={image} alt="logo" />
      <div className={classnames(styles.name, "font-s")}>{label}</div>
    </div>
  );
};
