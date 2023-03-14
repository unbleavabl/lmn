import { FC } from 'react'
import { StartInteraction } from 'renderer/business-components/StartInteraction'
import { classnames } from 'shared/utils'

import styles from './styles.module.sass'

export const Start: FC = () => {
  return (
    <div className={styles["start-container"]}>
      <img className={styles.logo} src="images/allstatelogo-01.svg" alt="logo" />
      <div className={styles["image-container"]}>
        <h1 className={classnames(styles.heading, 'font-xl')}>Your Home</h1>
        <img className={styles["house-image"]} src='images/mainhouse.jpg' alt="house image" />
        <img className={styles["boy-image"]} src='images/boy-01.png' alt="house image" />
        <img className={styles["girl-image"]} src='images/girl-01.png' alt="house image" />
      </div>
      <StartInteraction />
    </div>
  )
}
