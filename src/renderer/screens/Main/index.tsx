import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconLabel } from "renderer/business-components/IconLabel";
import { ItemSelection } from "renderer/business-components/ItemSelection";
import { useInfo } from "renderer/hooks/useInfo";
import { Item } from "shared/data/info";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";

export function MainScreen() {
  const navigate = useNavigate();
  const { categoryInfo } = useInfo();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["image-container"]}>
        <img
          className={styles["house-image"]}
          src={categoryInfo.image}
          alt="house image"
        />
      </div>
      <div className={styles["item-selection-wrapper"]}>
        <img
          className={styles.logo}
          src="images/allstatelogo-01.svg"
          alt="logo"
        />
        <ItemSelection
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <button
          className={classnames(styles.back)}
          onClick={() => {
            navigate("/");
          }}
        >
          <IconLabel image="images/homeicon-01-01.svg" label="Home" />
        </button>
      </div>
    </div>
  );
}
