import logo from './logo.svg';
import './App.css';
import UpdateYearsMonth from './Componentsf/Month_years';
import Counter from './Componentsf/myCoustomHooks';
import Counterone from './Componentsf/myCoustomHooks/Counterone';

function App() {
  return (
    <div className="App">
      {/* <UpdateYearsMonth /> */}
      <Counter />
      <Counterone />
    </div>
  );
}

export default App;
