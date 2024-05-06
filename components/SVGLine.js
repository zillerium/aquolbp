// components/SVGLine.js
const SVGLine = ({ x1, y1, x2, begin }) => (
  <line x1={x1} y1={y1} x2={x1} y2={y1} stroke="black" strokeWidth="1.5">
    <animate attributeName="x2" begin={begin} dur="1s" fill="freeze" from={x1} to={x2}/>
    <set attributeName="marker-end" attributeType="XML" begin={`${parseFloat(begin.replace('s', '')) + 1}s`} dur="indefinite" to="url(#arrowhead)" />
  </line>
);

export default SVGLine;

