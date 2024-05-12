import React, { useState, useContext } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletSign from "../components/WalletSign";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import MoneyInput from "../components/MoneyInput";

function Liquidity() {

  const { isWalletConnected } = useContext(WalletContext);

  const houseData = [
      { name: 'House1', liquidity: '100K' },
      { name: 'House2', liquidity: '150K' },
      { name: 'House3', liquidity: '10K' },
      { name: 'House4', liquidity: '90K' },
      { name: 'House5', liquidity: '120K' },
  ];
  return (
    <Container className="mt-4">

          <WalletControls />

        {/* Row for Wallet Details */}
          <WalletDetails />
	  <h1>Select RWA Tokens for Shared Liquidity</h1>
	  <p>This is a risk management screen. Capital is allocated dynamically across a group of tokens. Do your due dilligence and allocate liquidity pool capital (this is not buying the tokens but providing liquidity into the shared AMM).</p>
		  <p>Select the tokens swaps you wish to finance in a liquidity pool. Amounts shown in the listbox are in thousands, eg 100K means 100,000 USDC.</p>
	  <p>For example if 5K is shared across three tokens, then each token gets 5K via dynamic allocation.</p>
          <MoneyInput />
          <HouseList houses={houseData} />
    </Container>
  );
}

export default Liquidity;

