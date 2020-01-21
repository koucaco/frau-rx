import React, { useState } from 'react';
import './Gasp.css';
import Rules from './Rules';
import Results from './Results';
import { flatten, map, clone, tap, keys, filter } from 'lodash';
import format from './utils/string';
import { Checkbox, Dropdown, Form, Radio } from '../node_modules/semantic-ui-react'
import { toSet } from './utils/utils'
function Gasp(props) {
  let [breedGender, setBreedGender] = useState(null);
  let [type, setType] = useState(null);
  let [resell, setResell] = useState(false);
  let [keywords, setKeywords] = useState({keywords: {}});
  let loading = true;
  
  const handleBGChange = (e, { value }) => setBreedGender(value);
  const handleTypeChange = (e, { value }) => setType(value);
  const handleResellChange = (e, { value }) => setResell(!resell);
  const handleKeywordChange = (e, { value }) => {
    let newState = clone(keywords);
    if (newState.keywords[value]) {
      delete newState.keywords[value];
    }
    else {
      newState.keywords[value] = value;
    }
    setKeywords(newState);
  };

  let allKeywords = {};
  // if(selected != null) {
  //   allKeywords = flatten(Object.values(selected));
  // }
  let visibility = true;

  let rules = [];
  let breedGenderDropdown, typeRadio, resellToggle, keywordCheckboxes, resultingList;
  if(props.strings && props.sheet) {
    loading = false;
    let filters = props.sheet.filters;
    rules = getRules(props.strings.en);
    let bgOptions = generateOptions(filters.Breed);
    let typeOptions = filters.Type;
    let keywordOptions = filters.Keywords;

    breedGenderDropdown = 
      <div className="BreedGenderDropdown">
        <Dropdown 
        placeholder={props.strings.en.gaspbg} 
        fluid 
        selection 
        options={bgOptions} 
        onChange={handleBGChange} /></div>;
    
    typeRadio = <Form className="Type">
      <div className="Label">What are you selling?</div>
      <div className="RadioGroup">
      {map(typeOptions, t => 
          <Radio 
            className="Radio"
            key={t}
            label={t}
            name='typeGroup'
            value={t}
            checked={type === t}
            onChange={handleTypeChange}
          />
        )}
        </div>
      </Form>;
    resellToggle = <Checkbox 
                      className="Resell"
                      toggle 
                      label="Are you reselling?"
                      checked={resell}
                      onChange={handleResellChange}/>
    keywordCheckboxes = <div className="CheckboxWrapper"><Form className="Keywords CheckboxContainer">
      {map(keywordOptions, k => 
          <Checkbox  
            className="Checkbox"
            key={k}
            label={k}
            name='keywordGroup'
            value={k}
            checked={keywords[k]}
            onChange={handleKeywordChange}
          />
        )}
    </Form></div>
  }

  if(breedGender && type && resell !== null && keys(keywords.keywords).length > 0) {
    resultingList = filterUsers(props.sheet.users, breedGender, type, resell, keywords.keywords);
  }
  
  return (
    <div className="Gasp">
      <Rules className="Left Rules" ruleset={rules} />
      <div className="Right">
        <div className="GaspFormContainer">
          {breedGenderDropdown}
          {resellToggle}
          {typeRadio}
          {keywordCheckboxes}
        </div>
        {loading ? <div></div> : <Results className="Results" visible={visibility} text={format("gaspresult")} keywords={allKeywords} list={resultingList}/>}
      </div>
    </div>
  );
}

function getRules(array) {
  // rules support bbcode

  // TODO: need to change later in backend to follow "gaspruleXX" naming rule to easily order rules
  let gaspRules =  [
    "rules",
    "gasprulenote",
    "gaspcredit",
    "gaspincomplete",
    "gaspthread",
    "gaspqueue",
    "duplicateremover",
    "gasprule1",
    "gasprule2",
    "gasprule3",
    "gasprule4",
    "gasprule5",
    "gasprule6",
    "gasprule7",
    "gasprule8"
  ];

  let output = [];
  
  // for (let t of Object.getOwnPropertyNames(array)) {
  //   if (t.length > 8 && t.substring(0, 4) === "gasp" && !isNaN(Number(t.substring(8))))
  //     output.push(t);
  // }
  map(gaspRules, rule => {
    output.push(array[rule]);
  })

  return output;
}

function generateOptions(array) {
  
  return map(array, (val) => {return {
    key: val,
    value: val,
    text: val
  }
  });
}

function filterUsers(users, breedGender, type, resell, keywords) {
  let selected = toSet(keys(keywords));
  let output = map(filter(users, user => {
    let blacklist = user.blacklist ? user.blacklist.split(', ') : [];
    let whitelist = user.whitelist.split(', ');

    return splitString(user, "type").has(type)
      && splitString(user, "breed").has(breedGender)
      && filter(whitelist, wl => wl === "no preference" || selected.has(wl)).length > 0
      && !(resell && toSet(blacklist).has("resell"))
      && filter(blacklist, bl => selected.has(bl)).length === 0
  }), "user");

  console.log(output);
  return output;
}

function splitString(obj, key) {
  return toSet(obj[key].split(', '));
}
export default Gasp;