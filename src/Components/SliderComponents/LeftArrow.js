import React from 'react';
import 'font-awesome/css/font-awesome.css'

export default function LeftArrow (props) {
  return (
    <div onClick={props.countIncrease()}style={{fontSize: '2em', marginRight: '12px'}}>
      <i className="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

