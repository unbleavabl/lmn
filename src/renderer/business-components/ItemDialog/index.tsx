import * as Dialog from "@radix-ui/react-dialog";
import { FC, useState, useEffect } from "react";
import { Item } from "shared/data/info";
import { classnames } from "shared/utils";

export type ItemDialogProps = {
  item: Item | null;
  open: boolean;
  onOpenChange: (item: Item | null) => void;
};

import styles from "./styles.module.sass";

export const ItemDialog: FC<ItemDialogProps> = ({
  item,
  open,
  onOpenChange,
}) => {
  const [selectedType, setSelectedType] = useState(item?.types[0]);
  const [selectedOption, setSelectedOption] = useState(
    item?.types[0].options[0]
  );

  const handleTypeSelection = (type: Item["types"][0]) => {
    setSelectedType(type);
    setSelectedOption(type.options[0]);
  };

  useEffect(() => {
    if (item) {
      handleTypeSelection(item?.types[0]);
    }
  }, [item]);

  return (
    <Dialog.Root
      onOpenChange={(newOpen) => {
        onOpenChange(newOpen ? item : null);
      }}
      open={open}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles["dialog-overlay"]} />
        <Dialog.Content className={styles["dialog-content"]}>
          <div className={styles["dialog-content-wrapper"]}>
            <div className={classnames(styles["selection-wrapper"], "")}>
              <div className={styles["selection-types"]}>
                {`${item?.name} types`}
                <div className={styles["item-container"]}>
                  {item?.types.map((type) => (
                    <button
                      onClick={() => handleTypeSelection(type)}
                      className={classnames(
                        styles.item,
                        selectedType?.name === type.name ? styles.selected : ""
                      )}
                    >
                      <img
                        className={styles["item-image"]}
                        src={type.image}
                        alt={type.name}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className={styles["selection-options"]}>
                {`${selectedType?.name} options`}
                <div className={styles["item-container"]}>
                  {selectedType?.options.map((option) => (
                    <button
                      onClick={() => setSelectedOption(option)}
                      className={classnames(
                        styles.item,
                        selectedOption?.name === option.name
                          ? styles.selected
                          : ""
                      )}
                    >
                      <img
                        className={styles["item-image"]}
                        src={option.image}
                        alt={option.name}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles["selected-content"]}>
              <div className={styles["selected-image-container"]}>
                  <img
                    className={styles["selected-image"]}
                    src={selectedOption?.image}
                    alt={selectedOption?.name}
                  />
              </div>
              <div className={styles["selected-description-wrapper"]}>
                <h3 className={classnames(styles["option-title"], 'font-l')}>{selectedOption?.name}</h3>
                <p className={classnames(styles["option-description"], 'font-s')}>{selectedOption?.description}</p>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
