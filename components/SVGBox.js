// components/SVGBox.js
const SVGBox = ({ x, y, imageSrc, id, beginOpacity }) => (
  <g>
    <image href={`/` + imageSrc} x={x} y={y} width="50" height="50" opacity="0">
      <animate attributeName="opacity" begin={beginOpacity} dur="0.5s" fill="freeze" from="0" to="1"/>
    </image>
  </g>
);

export default SVGBox;

