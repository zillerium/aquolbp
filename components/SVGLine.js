// components/SVGLine.js
const SVGLine = ({ x1, y1, x2, y2, begin }) => (
  <line x1={x1} y1={y1} x2={x1} y2={y1} stroke="black" strokeWidth="1.5">
    <animate attributeName="x2" begin={begin} dur="1s" fill="freeze" from={x1} to={x2}/>
    <animate attributeName="y2" begin={begin} dur="1s" fill="freeze" from={y1} to={y2}/>
  </line>
);

export default SVGLine;

