import * as RadioGroup from "@radix-ui/react-radio-group";
import { FC } from "react";

import styles from "./styles.module.sass";

export type SelectRadioProps = {
  options: Array<{
    label: string;
    value: string;
  }>;
  value: string;
  onChange: (val: string) => void;
};

export const SelectRadio: FC<SelectRadioProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <RadioGroup.Root
      className={styles["radio-root"]}
      onValueChange={(e) => onChange(e)}
      value={value}
    >
      {options.map((item) => {
        return (
          <div key={item.value} style={{ display: "flex", alignItems: "center" }}>
            <RadioGroup.Item
              className={styles["radio-item"]}
              value={item.value}
              id={item.value}
            />
            <label className={styles["radio-label"]} htmlFor={item.value}>
              {item.label}
            </label>
          </div>
        );
      })}
    </RadioGroup.Root>
  );
};
