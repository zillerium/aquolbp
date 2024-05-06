import React from 'react';

const ArrowHeadVertical = ({ x, y, begin }) => {
  // Ensure x and y are treated as numbers
  const numX = Number(x);
  const numY = Number(y);

  // Calculating points based on dynamic x and y
  const points = `${numX},${numY} ${numX - 5},${numY + 10} ${numX + 5},${numY + 10}`;

  // Log coordinates and points to console for debugging
  console.log(`ArrowHeadVertical coordinates: x=${numX}, y=${numY}`);
  console.log(`ArrowHeadVertical - Points: ${points}`);

  return (
    <polygon
      points={points}
      fill="black"
      opacity="0">
      <animate attributeName="opacity" begin={begin} dur="0.5s" fill="freeze" from="0" to="1"/>
    </polygon>
  );
}

export default ArrowHeadVertical;

