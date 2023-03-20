import * as RadioGroup from "@radix-ui/react-radio-group";
import { FC } from "react";

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
      className="RadioGroupRoot"
      defaultValue="default"
      aria-label="View density"
    >
      {options.map((item) => {
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <RadioGroup.Item
              className="RadioGroupItem"
              value={item.value}
              id={item.value}
              onChange={(e) => onChange(e.currentTarget.value)}
            >
              <RadioGroup.Indicator className="indicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor={item.value}>
              {item.label}
            </label>
          </div>
        );
      })}
    </RadioGroup.Root>
  );
};
