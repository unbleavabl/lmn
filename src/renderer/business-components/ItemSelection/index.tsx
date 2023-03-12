import { FC, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { classnames } from "shared/utils";
import { info } from "shared/data/info";

import styles from "./styles.module.sass";

type Item = typeof info[0]

export type IconLabelProps = {
  image: string;
  label: string;
};

export type ItemPopoverProps = {
  item: Item,
  onItemSelect: (open: boolean) => void
  isSelected: boolean
};

export type ItemDialogProps = {
  item: Item | null,
  open: boolean,
  onOpenChange: (item: Item | null) => void

};


export const IconLabel: FC<IconLabelProps> = ({ image, label }) => {
  return (
    <div className={styles.icon}>
      <img className={styles.logo} src={image} alt="logo" />
      <div className={classnames(styles.name, "font-s")}>{label}</div>
    </div>
  );
};

export const ItemPopover = ({ item, onItemSelect }: ItemPopoverProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={(newOpen) => setOpen(newOpen)}>
      <Popover.Trigger className={styles["popover-trigger"]}>
        <IconLabel image={item.icon} label={item.name} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles["popover-content"]} sideOffset={100}>
          <div className={styles["popover-image-container"]}>
            <img className={styles["popover-image"]} src={item.types[0].image} alt="logo" />
          </div>
          <div className={styles["popover-text-content"]}>
            <h3 className={classnames(styles["popover-title"], 'font-n')}>{item.name}</h3>
            <p className={classnames(styles["popover-description"], 'font-s')}>{item.name}</p>
            <button className={styles.arrow} onClick={() => onItemSelect(true)} />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export const ItemDialog = ({ item, open, onOpenChange }: ItemDialogProps) => {
  const [type, setType] = useState(item?.types[0])
  return (
    <Dialog.Root onOpenChange={(newOpen) => { onOpenChange(newOpen ? item : null) }} open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles["dialog-overlay"]} />
        <Dialog.Content className={styles["dialog-content"]}>
          <div className={styles["dialog-content-wrapper"]}>
            <div className={classnames(styles["dialog-selection-wrapper"], '')}>
              <div className={styles["dialog-selection-types"]}>
                {`${item?.name} types`}
              </div>
              <div className={styles["dialog-selection-options"]}>
                {`${type?.name} options`}
              </div>
            </div>
            <div className={styles["dialog-selected-content"]}>
              <div className={styles["dialog-selected-image"]}>
                image
              </div>
              <div className={styles["dialog-selected-description"]}>
                description
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )

}

export const ItemSelection: FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className={styles.wrapper}>
      <IconLabel image="/homeicon-01-01.svg" label="Home" />
      {info.map((item) => (
        <ItemPopover
          item={item}
          onItemSelect={(open: boolean) => { setSelectedItem(open ? item : null) }}
          isSelected={selectedItem?.name === item.name}
        />
      ))}
      <ItemDialog
        item={selectedItem}
        onOpenChange={(item) => { setSelectedItem(item) }}
        open={!!selectedItem} />
    </div>
  );
};
