import { useTranslation } from 'react-i18next';
import ImcForm from './components/ImcForm/ImcForm';
import ImcTable from './components/ImcTable/ImcTable'; 
import GlucoseForm from './components/GlucoseForm/GlucoseForm';
import GlucoseTable from './components/GlucoseTable/GlucoseTable';
import Navbar from './components/TopBar/TopBar'; 
import './App.css';

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container">
      <Navbar changeLanguage={changeLanguage} />

      <div style={{ marginTop: '60px' }}>
        <ImcForm />
        <ImcTable /> 
        <GlucoseForm />
        <GlucoseTable /> 
      </div>
    </div>
  );
};

export default App;
