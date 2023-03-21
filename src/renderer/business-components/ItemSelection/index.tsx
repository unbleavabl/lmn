import { FC } from "react";
import { Item } from "shared/data/info";

import styles from "./styles.module.sass";
import { ItemPopover } from "../ItemPopover";
import { ItemDialog } from "../ItemDialog";
import { useInfo } from "renderer/hooks/useInfo";

export type ItemSelectionProps = {
  selectedItem: Item | null;
  setSelectedItem: (item: Item | null) => void;
};

export const ItemSelection: FC<ItemSelectionProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  const { items } = useInfo();
  console.log({items})
  return (
    <div className={styles.wrapper}>
      {items.map((item) => (
        <ItemPopover
          key={item.name}
          item={item}
          onItemSelect={(open: boolean) => {
            setSelectedItem(open ? item : null);
          }}
          isSelected={selectedItem?.name === item.name}
        />
      ))}
      <ItemDialog
        item={selectedItem}
        onOpenChange={(item) => {
          setSelectedItem(item);
        }}
        open={!!selectedItem}
      />
    </div>
  );
};
