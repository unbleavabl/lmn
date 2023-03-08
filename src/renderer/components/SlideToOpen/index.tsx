import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { FC, PropsWithChildren, useRef } from "react";

import styles from './styles.module.sass'

export type SlideToOpenProps = {
  onOpen: VoidFunction
}

export const SlideToOpen: FC<PropsWithChildren<SlideToOpenProps>> = ({ onOpen, children }) => {
  const slideComplete = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const lastX = useRef(0)
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data.
  const bind = useDrag(({ down, offset: [ox], cancel }) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const dragWidth = dragRef.current?.offsetWidth || 0;
    const emptyWidth = containerWidth - dragWidth;
    const relativeOffsetX = ox - lastX.current;
    if (!down) {
      api.set({ x: 0 })
      lastX.current = ox;
      slideComplete.current = false
      return;
    }
    if (relativeOffsetX < 0) {
      api.set({ x: 0 })
      return;
    }
    if (relativeOffsetX >= emptyWidth && !slideComplete.current) {
      api.set({ x: emptyWidth })
      slideComplete.current = true
      onOpen()
      return;
    }
    if (relativeOffsetX >= emptyWidth) {
      api.set({ x: emptyWidth })
      return;
    }
    api.set({ x: relativeOffsetX })
  })

  // Bind it to a component.
  return <div className={styles["drag-container"]} ref={containerRef} >
    <animated.div ref={dragRef} className={styles.drag} {...bind()} style={{ x, y, touchAction: 'none' }} >
      {children}
    </animated.div>
  </div>
}