import { useNavigate } from 'react-router-dom'
import { ItemSelection } from 'renderer/business-components/ItemSelection';
import { classnames } from 'shared/utils'

import styles from './styles.module.sass'

export function MainScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles["main-container"]}>
      <img className={styles.logo} src="/allstatelogo-01.svg" alt="logo" />
      <div className={styles["image-container"]}>
        <h1 className={classnames(styles.heading, 'font-m')}>Your Home</h1>
        <img className={styles["house-image"]} src='/mainhouse.jpg' alt="house image" />
      </div>
      <ItemSelection />
    </div>
  )
}
