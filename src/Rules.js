import React from 'react';
import './Rules.css';
import parser from 'bbcode-to-react';
import _ from 'lodash';

function Rules(props) {
  let display = [];
  
  _.forEach(props.ruleset, (rule, id) => {
    let out = <span key={"rule"+id}>{parser.toReact(rule)}<br /></span>;
    return display.push(out);
  });

  return (
    <div className="Rules">
      { display }
    </div>
  );
}

export default Rules;
