import { ChangeEventHandler, FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconLabel } from "renderer/business-components/IconLabel";
import { KeyboardWithInput } from "renderer/components/Keyboard";
import { classnames } from "shared/utils";

import styles from "./styles.module.sass";

export const Name: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const onConfirm = () => {
    navigate("/main");
  };

  const keyboard = useRef<any>();

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    let input = event.target.value;
    setName(input);
    keyboard.current.setInput(input);
  };

  return (
    <div className={styles.wrapper}>
      <img
        className={styles.logo}
        src="images/allstatelogo-01.svg"
        alt="logo"
      />
      <div className={styles["input-wrapper"]}>
        <label
          className={classnames(styles.label, "font-l")}
          htmlFor="name-input"
        >
          Enter your Name
        </label>
        <input
          id="name-input"
          className={classnames(styles.input, "font-xl")}
          value={name}
          onChange={(e) => onChangeInput(e)}
        />
      </div>
      <KeyboardWithInput
        keyboardRef={keyboard}
        onKeyPress={(val) => {
          if (val === "{backspace}") {
            setName((name) =>
              name.substring(0, name.length > 0 ? name.length - 1 : 0)
            );
            return;
          }
          if (val === "{space}") {
            setName((name) => name + " ");
            return;
          }
          setName((name) => name + val);
        }}
        onConfirm={onConfirm}
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
  );
};
