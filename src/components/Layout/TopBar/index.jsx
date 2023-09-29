import styles from './TopBar.module.css'
import { useTranslation } from 'react-i18next';
import logo from '../../../assets/arrowLlegadas.png'

const TopBar = () => {

    const { t } = useTranslation();

  return (
    <div className={styles.top_bar}>
    <div className={styles.logo}>
          <div className={styles.picture}>
            <img src={logo} />
          </div>
    </div>    
      <h3>{t('Bienvenidos al Aeropuerto de Toncontin')}</h3>
    </div>
  )
}

export default TopBar