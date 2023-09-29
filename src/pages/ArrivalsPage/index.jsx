import { useTranslation } from 'react-i18next'
import Header from '../../components/Layout/Header'
import FlightInfoArrivals from '../../components/Layout/FlightInfoArrivals/FlightInfoArrivals'

const ArrivalsPage = () => {

  const {t} = useTranslation();
  return (
    <>
     <Header title={t('LLEGADAS')} /> 
    
     <FlightInfoArrivals />
    </>
  )
}

export default ArrivalsPage