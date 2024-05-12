import React from 'react';

function AquoIntro({ userDetails }) {
  return (
    <div>
      <h1>Aquo AMM/Trade Demo</h1>
      <p>This site shows some concepts only for Aquo based AMMs</p>
      <ul > 
        <li>Investors nominate RWA tokens they will support in liquidity pools</li>
        <li>LPs receive USDC via a shared pool which has the USDC, this is called Liquidity on Demand</li>
        <li>AMMs trade under a combination of Concentrated Liquidity and Stableswap conditions</li>
      </ul>
      <p>This site has no smart contracts implemented but the Wallet Connect code is implemented. It is designed to show the flows a user might see in a real app.</p>
      {/* Display additional user details here */}
    </div>
  );
}

export default AquoIntro;

