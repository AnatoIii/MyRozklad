import React, { useState } from 'react';
import './App.scss';
import Menu from './menu/Menu';
import SelectableSubjects from './selectableSubjects/SelectableSubjects';
import SubjectsList from './subjectsList/SubjectsList';

function App() {
  const [showElements, setShowElements] = useState(false);
  
  const onGroupChange = () => {
    window.location.reload();
  }

  return (
    <div className="App">
        <Menu onGroupChange={onGroupChange} />
        <div className="dataBlock">
          <div className="buttonBlock">
            <div className='legend'>
              <div className='color1'>Lecture</div>
              <div className='color2'>Lab</div>
              <div className='color3'>Practical</div>
            </div>
            <button className="selectButton" onClick={() => setShowElements(!showElements)}>{!showElements ? "Show selectable" : "Hide selectable"}</button>
          </div>
          {showElements ? (
            <SelectableSubjects />
          ): <SubjectsList />}
        </div>
    </div>
  );
}

export default App;
