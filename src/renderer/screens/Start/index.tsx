import { FC } from 'react'
import { StartInteraction } from 'renderer/business-components/StartInteraction'
import { Heading } from 'renderer/components'

import styles from './styles.module.sass'

export const Start: FC = () => {
  return (
    <div className={styles["start-container"]}>
      <Heading>Your Home</Heading>
      <StartInteraction />
    </div>
  )
}
