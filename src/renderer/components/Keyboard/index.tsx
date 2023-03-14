import {
  ChangeEventHandler,
  FC,
  MutableRefObject,
  useRef,
  useState,
} from "react";
import Keyboard, { KeyboardReactInterface } from "react-simple-keyboard";

export type KeyboardWithInputProps = {
  onKeyPress: (val: string) => void;
  onConfirm: VoidFunction;
  keyboardRef: MutableRefObject<any>;
};

export const KeyboardWithInput: FC<KeyboardWithInputProps> = ({
  onKeyPress,
  onConfirm,
  keyboardRef,
}) => {
  const [layoutName, setLayoutName] = useState("shift");

  const commonKeyboardOptions: Partial<KeyboardReactInterface["options"]> = {
    onChange: () => {},
    onKeyPress: (button) => onKeyPressInternal(button),
    theme: "simple-keyboard hg-theme-default hg-layout-default",
    physicalKeyboardHighlight: true,
    syncInstanceInputs: true,
    mergeDisplay: true,
    autoUseTouchEvents: true,
  };

  const keyboardOptions: KeyboardReactInterface["options"] = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        "q w e r t y u i o p",
        " a s d f g h j k l ",
        "{shiftleft} z x c v b n m {backspace}",
        "{space} {enter}",
      ],
      shift: [
        "Q W E R T Y U I O P",
        " A S D F G H J K L ",
        "{shiftleft} Z X C V B N M {backspace}",
        "{space} {enter}",
      ],
    },
    display: {
      "{backspace}": "⌫",
      "{enter}": "Confirm",
      "{shiftleft}": "⇧",
    },
  };

  const onKeyPressInternal = (button: string) => {
    console.log({button});
    if (button === "{shiftleft}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
      return;
    }
    if (button === "{enter}") {
      onConfirm();
      return;
    }
    onKeyPress(button);
    setLayoutName("default");
  };

  return (
    <div className={"keyboardContainer"}>
      <Keyboard
        baseClass={"simple-keyboard-main"}
        keyboardRef={(r) => {
          keyboardRef.current = r;
        }}
        layoutName={layoutName}
        {...keyboardOptions}
      />
    </div>
  );
};
