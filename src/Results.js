import React from 'react';
import './Results.css';
import { map, join } from 'lodash';
import format from './utils/string';

function Results(props) {
  let pinglist = join(map(props.list, (name) => "@" + name), " ");
  let keywords = join(props.keywords, ", ");
  let results = props.text + keywords + format("result1") + pinglist + format("result2");
  
  return (
    <div className="Results">
      {props.visible? results : ""}
    </div>
  );
}

export default Results;
