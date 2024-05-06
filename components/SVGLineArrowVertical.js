// components/SVGLineArrowVertical.js
import React from 'react';

const SVGLineArrowVertical = ({ x, y1, y2, begin }) => (
  <line x1={x} y1={y1} x2={x} y2={y1} stroke="black" strokeWidth="1.5">
    <animate attributeName="y2" begin={begin} dur="1s" fill="freeze" from={y1} to={y2}/>
    <set attributeName="marker-end" attributeType="XML" begin={`calc(${begin} + 1s)`} dur="indefinite" to="url(#arrowhead)" />
  </line>
);

export default SVGLineArrowVertical;

