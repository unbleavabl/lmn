import { FC } from 'react'
import { StartInteraction } from 'renderer/business-components/StartInteraction'
import { classnames } from 'shared/utils'

import styles from './styles.module.sass'

export const Start: FC = () => {
  return (
    <div className={styles["start-container"]}>
      <img className={styles["house-image"]} src="images/StartHome.png" alt="logo" />
      <StartInteraction />
    </div>
  )
}
