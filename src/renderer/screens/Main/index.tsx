import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemSelection } from "renderer/business-components/ItemSelection";
import { Item } from "shared/data/info";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";

export function MainScreen() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className={styles["main-container"]}>
      <div className={styles["image-container"]}>
        <img className={styles.logo} src="images/allstatelogo-01.svg" alt="logo" />
        <img
          className={styles["house-image"]}
          src="images/mainhouse.jpg"
          alt="house image"
        />
      </div>
      <div className={styles["item-selection-wrapper"]}>
        <ItemSelection selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
        <button
          className={classnames(styles.back, "font-xl")}
          onClick={() => {
            navigate("/");
          }}
        >
          {"<"}
        </button>
      </div>
    </div>
  );
}
