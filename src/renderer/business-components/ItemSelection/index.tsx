import { FC, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { classnames } from "shared/utils";
import { info } from "shared/data/info";

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

export const ItemPopover = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <Popover.Trigger className={styles["popover-trigger"]}>
        <IconLabel image={item.icon} label={item.name} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles["popover-content"]} sideOffset={100}>
          Some info
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const ItemSelection: FC = () => {
  return (
    <div className={styles.wrapper}>
      <IconLabel image="/homeicon-01-01.svg" label="Home" />
      {info.map((item) => (
        <ItemPopover item={item} />
      ))}
    </div>
  );
};
