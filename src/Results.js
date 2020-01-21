import React from 'react';
import './Results.css';
import { map, join } from 'lodash';

function Results(props) {
  let pinglist = join(map(props.list, (name) => "@" + name), " ");
  let keywords = join(props.keywords, ", ");
  return (
    <div className="Results">
      {props.text} {keywords}
      [/center][br][br][size=1]
      {pinglist}
      [/size]
    </div>
  );
}

export default Results;
