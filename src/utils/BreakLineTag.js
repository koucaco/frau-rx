import React from 'react';
import parser, { Tag } from 'bbcode-to-react'

class BreakLineTag extends Tag {
  toHTML() {
    return '<br />';
  }

  toReact() {
    return <br />;
  }
}

parser.registerTag('br', BreakLineTag);