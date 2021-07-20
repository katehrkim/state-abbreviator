import './App.css';
import stateData from './statedata/index.js'
import {useState} from 'react';

const App = () => {

  const [selectedState, setSelectedState] = useState(null);

  const displayDropDownOptions = () => {
    let stateObjs = [];
    for (let i = 0; i < stateData.length; i++) {
      stateObjs.push(<option key={i} value={stateData[i]['alpha-2']}>{stateData[i]['name']}</option>)
    }
    return stateObjs;
  }

  const handleChange = (evt) => {
    setSelectedState(evt.target.value);
  }

  return (
    <div className="App">
      <h1> Select State From Dropdown Menu </h1>
      <select onChange={handleChange}>
        {
          displayDropDownOptions()
        }
      </select>
      <h1>
        {
          selectedState
        }
      </h1>

    </div>
  );
}

export default App;
