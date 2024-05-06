// components/SVGLineArrowVerticalDown.js
import React from 'react';

const SVGLineArrowVerticalDown = ({ x, y1, y2, begin }) => {
  // Ensure x, y1, and y2 are treated as numbers
  const numX = Number(x);
  const numY1 = Number(y1);
  const numY2 = Number(y2);

  return (
    <React.Fragment>
      <line 
        x1={numX} 
        y1={numY1} 
        x2={numX} 
        y2={numY1} // Start with y2 being the same as y1 to hide the line initially
        stroke="black" 
        strokeWidth="1.5" 
        marker-end="url(#arrowhead-down)"
        opacity="0">
        <animate attributeName="opacity" begin={begin} dur="0.1s" fill="freeze" from="0" to="1"/>
        <animate attributeName="y2" begin={begin} dur="1s" fill="freeze" from={numY1} to={numY2}/>
      </line>
    </React.Fragment>
  );
}

export default SVGLineArrowVerticalDown;

