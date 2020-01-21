import React, { useState } from 'react';
import './Cape.css';
import Rules from './Rules';
import Results from './Results';
import { flatten, map } from 'lodash';
import format from './utils/string';

function Cape(props) {
  let [selected, setSelected] = useState({});
  let keywords;

  if(selected != null) {
    setSelected(null);
    keywords = flatten(Object.values(selected));
  }
  let resultingList = [];
  
  let rules = [];
  if(props.strings) {
    rules = getRules(props.strings.en);
  }
  
  return (
    <div className="Cape">
      <Rules ruleset={rules} />
      <div className="cape-form-container">
      </div>
      <Results visible={true} text={format("caperesult")} keywords={keywords} list={resultingList}/>
    </div>
  );
}

function getRules(array) {
  console.log(array);
  let rules =  [
    "rules",
    "gasprulenote",
    "capecredit",
    "capeincomplete",
    "capethread",
    "capediscord",
    "duplicateremover",
    "caperule1",
    "caperule2",
    "caperule3",
    "caperule4",
    "caperule5",
    "caperule6",
    "caperule7"
  ];

  let output = [];
  
  // for (let t of Object.getOwnPropertyNames(array)) {
  //   if (t.length > 8 && t.substring(0, 4) === "cape" && !isNaN(Number(t.substring(8))))
  //     output.push(t);
  // }

  map(rules, rule => {
    output.push(array[rule]);
  });

  return output;
}

export default Cape;
