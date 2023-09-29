import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      LLEGADAS: 'ARRIVALS',
      Aerolinea: 'Airline',
      Vuelo: 'Flight',
      Origen: 'From',
      Programado: 'Scheduled',
      Estimado: 'Estimated',
      Estado: 'Status',
      Cerrado: 'Closed',
      Demorado: 'Delayed',
      Verificando: 'Checking',
      Embarcando: 'Boarding',
      'Ultimo Llamado' : 'Last Call',
      Aterrizó: 'Landed',
      'Proceder a puerta' : 'Proceed to gate',
      'Bienvenidos al Aeropuerto de Toncontin' : 'Welcome to Toncontin Airport',
      Destino: 'To',
      PROGRAMADO: 'SCHEDULED',
      CERRADO: 'CLOSED',
      DEMORADO: 'DELAYED',
      VERIFICANDO: 'CHECKING',
      EMBARCANDO: 'BOARDING',
      'ÚLTIMO LLAMADO' : 'LAST CALL',
      'ULTIMO LLAMADO' : 'LAST CALL',
      ATERRIZÓ: 'LANDED',
      ATERRIZO: 'LANDED',
      'PROCEDER A PUERTA' : 'PROCEED TO GATE',
      ABORDANDO : 'BOARDING',
      Abordando : 'Boarding',
    },
  },
  es: {
    translation: {
      ARRIVALS: 'LLEGADAS',
      Airline: 'Aerolinea',
      Flight: 'Vuelo',
      From: 'Origen',
      Scheduled: 'Programado',
      Estimated: 'Estimado',
      Status: 'Estado',
      Closed: 'Cerrado',
      Delayed: 'Demorado',
      Checking: 'Verificando',
      Boarding: 'Embarcando',
      'Last Call' : 'Ultimo Llamado',
      Landed: 'Aterrizó',
      'Proceed to gate' : 'Proceder a puerta',
      'Welcome to Toncontin Airport' : 'Bienvenidos al Aeropuerto de Toncontin',
      To: 'Destino',
      SCHEDULED: 'PROGRAMADO',
      CLOSED: 'CERRADO',
      DELAYED: 'DEMORADO',
      CHECKING: 'VERIFICANDO',
      BOARDING: 'EMBARCANDO',
      'LAST CALL' : 'ÚLTIMO LLAMADO',
      'LAST CALL' : 'ULTIMO LLAMADO',
      LANDED: 'ATERRIZÓ',
      LANDED: 'ATERRIZO',
      'PROCEED TO GATE' : 'PROCEDER A PUERTA',
      ABORDANDO : 'BOARDING',
      Abordando : 'Boarding',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',   // Cambiado a español
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;