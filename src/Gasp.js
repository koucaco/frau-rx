import React, { useState } from 'react';
import './Gasp.css';
import Rules from './Rules';
import Results from './Results';
import { flatten } from 'lodash';

function Gasp() {
  let [selected, setSelected] = useState(null);
  let keywords;
  if(selected != null) {
    setSelected(null);
    keywords = flatten(Object.values(selected));
  }

  let resultingList = ["a","b"];
  let text = "[center][url=http://www1.flightrising.com/forums/skin/2480522]Please click here to go to the GASP thread![/url][br][br]Keywords selected: ";
  return (
    <div className="Gasp">
      <Rules />
      <div className="gasp-form-container">
      </div>
      <Results visible={true} text={text} keywords={keywords} list={resultingList}/>
    </div>
  );
}

export default Gasp;
