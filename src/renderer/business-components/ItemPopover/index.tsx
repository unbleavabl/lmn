import * as Popover from "@radix-ui/react-popover";
import { FC, useState } from "react";
import { Item } from "shared/data/info";
import { classnames } from "shared/utils";
import { IconLabel } from "../IconLabel";

import styles from "./styles.module.sass";

export type ItemPopoverProps = {
  item: Item;
  onItemSelect: (open: boolean) => void;
  isSelected: boolean;
};

export const ItemPopover: FC<ItemPopoverProps> = ({
  item,
  onItemSelect,
  isSelected,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <Popover.Anchor
        className={styles["popover-anchor"]}
        onClick={() => setOpen(true)}
        style={{
          top: `${item.hotspot.top}vh`,
          left: `${item.hotspot.left}vh`,
        }}
      />
      <Popover.Trigger
        className={classnames(
          styles["popover-trigger"],
          open || isSelected ? styles["popover-trigger-selected"] : ""
        )}
      >
        <IconLabel image={item.icon} label={item.name} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={styles["popover-content"]}
          side="right"
          sideOffset={50}
        >
          <div className={styles["popover-image-container"]}>
            <img
              className={styles["popover-image"]}
              src={item.image}
              alt="logo"
            />
          </div>
          <div className={styles["popover-bottom-content"]}>
            <div className={styles["popover-text-content"]}>
              <h3 className={classnames(styles["popover-title"], "font-n")}>
                {item.name}
              </h3>
              <p
                className={classnames(styles["popover-description"], "font-s")}
              >
                {item.description}
              </p>
            </div>
            {item.types?.length!! && <button
              className={styles.arrow}
              onClick={() => onItemSelect(true)}
            />}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
