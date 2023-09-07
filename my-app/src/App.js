import "./utils/i18n";
import LanguageSelector from "./components/languageSelector";
import DateTimeDisplay from "./components/dateTimeDisplay";
import NumberFormatter from "./components/numberFormatter";
import UnitFormatter from './components/unitFormatter';


function App() {
  return (
    <>
      <LanguageSelector/>
      <hr></hr>
      <DateTimeDisplay/>
      <hr></hr>
      <NumberFormatter />
      <hr></hr>
      <UnitFormatter unit="inch" value={5} />
      <UnitFormatter unit="pound" value={150} />
      <UnitFormatter unit="liter" value={2} />
    </>
  );
}

export default App;
