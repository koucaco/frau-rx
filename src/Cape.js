import React, { useState } from 'react';
import './Cape.css';
import Rules from './Rules';
import Results from './Results';
import { flatten } from 'lodash';


function Cape() {
  let [selected, setSelected] = useState(null);
  let keywords;

  if(selected != null) {
    setSelected(null);
    keywords = flatten(Object.values(selected));
  }

  let resultingList = [];
  let text = "[center][url=http://www1.flightrising.com/forums/art/2335577]Please click here to go to the CAPE thread![/url][br][br]Keywords selected: ";
  return (
    <div className="Cape">
      <Rules />
      <div className="cape-form-container">
      </div>
      <Results visible={true} text={text} keywords={keywords} list={resultingList}/>
    </div>
  );
}

export default Cape;
