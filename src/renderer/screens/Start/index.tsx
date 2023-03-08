import { FC } from 'react'
import { StartInteraction } from 'renderer/business-components/StartInteraction'
import { Heading } from 'renderer/components'
import { classnames } from 'shared/utils'

import styles from './styles.module.sass'

export const Start: FC = () => {
  return (
    <div className={styles["start-container"]}>
      <img className={styles.logo} src="/allstatelogo-01.svg" alt="logo" />
      <div className={styles["image-container"]}>
        <h1 className={classnames(styles.heading, 'font-xl')}>Your Home</h1>
        <img className={styles["house-image"]} src='/housephoto-01.png' alt="house image" />
        <img className={styles["boy-image"]} src='/boy-01.png' alt="house image" />
        <img className={styles["girl-image"]} src='/girl-01.png' alt="house image" />
      </div>
      <StartInteraction />
    </div>
  )
}
