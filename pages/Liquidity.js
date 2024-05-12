import React, { useState, useContext } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { WalletContext } from "../lib/WalletContext";
import WalletSign from "../components/WalletSign";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import MoneyInput from "../components/MoneyInput";
import RWALiquidity from "../components/RWALiquidity";

function Liquidity() {

  const { isWalletConnected } = useContext(WalletContext);
  const [selectedHouses, setSelectedHouses] = useState([]);
  const [amount, setAmount] = useState('');
  const [liquidityAmount, setLiquidityAmount] = useState('');

  const addLiquidit1y = () => {
      setLiquidityAmount(amount);  // Set the liquidity amount to the entered value
  };

const addLiquidity = () => {
    const enteredAmount = parseInt(amount); // Parse the entered amount to an integer

    setHouseData(prevHouseData => {
        const updatedHouses = prevHouseData.map(house => {
            if (selectedHouses.some(sh => sh.name === house.name)) {
                // Calculate the new liquidity by adding the entered amount
                const updatedLiquidity = `${parseInt(house.liquidity.slice(0, -1)) + enteredAmount}K`;
                return { ...house, liquidity: updatedLiquidity };
            }
            return house;
        });

        return updatedHouses; // Return the updated houses array without adding a new house each time
    });

    // For debugging, show the updated house details
    const houseDetails = houseData.map(house => `${house.name} (${house.liquity})`).join(', ');
    console.log("Updated House Details: ", houseDetails); // This will log the old values before they are updated
    setLiquidityAmount(`Add to seleted liquidity pools ${amount} K USD`); // Optionally update RWALiquidity if needed
};


const addLiquiditxxy = () => {
    const newHouse = { name: 'House6', liquidity: '50K' };
    setHouseData(prevHouseData => {
        const updatedHouses = prevHouseData.map(house => {
            return house;
        });
        return [...updatedHouses, newHouse];
    });

    const houseDetails = selectedHouses.map(house => {
        const houseDataEntry = houseData.find(h => h.name === house.name);
        // Correct usage to display house details from houseDataEntry
        return houseDataEntry ? `${house.name} (${houseDataEntry.liquidity})` : "";
    }).join(', ');

    const combinedDetails =  `Add to selected liquidity pools ${amount} K USDC`;
    setLiquidityAmount(combinedDetails);
};
 
console.log("li= ", liquidityAmount)
  const [houseData, setHouseData] = useState([
      { name: 'House1', liquidity: '100K' },
      { name: 'House2', liquidity: '150K' },
      { name: 'House3', liquidity: '10K' },
      { name: 'House4', liquidity: '90K' },
      { name: 'House5', liquidity: '120K' },
  ]);
  return (
    <Container className="mt-4">

          <WalletControls />

        {/* Row for Wallet Details */}
          <WalletDetails />
	  <h1>Select RWA Tokens for Shared Liquidity</h1>
	  <p>This is a risk management screen. Capital is allocated dynamically across a group of tokens. Do your due dilligence and allocate liquidity pool capital (this is not buying the tokens but providing liquidity into the shared AMM).</p>
		  <p>Select the tokens swaps you wish to finance in a liquidity pool. Amounts shown in the listbox are in thousands, eg 100K means 100,000 USDC.</p>
	  <p>For example if 5K is shared across three tokens, then each token gets 5K via dynamic allocation.</p>
          <MoneyInput value={amount} onChange={setAmount} />  {/* Bind the MoneyInput properly */}
          {' '}
          <Button variant="primary" className="ml-2" onClick={addLiquidity}>AddLiquidity</Button>
	  <Row>
                <Col md={6}>
	            <HouseList houses={houseData} selectedHouses={selectedHouses} setSelectedHouses={setSelectedHouses} />

                </Col>
                <Col md={6}>
                    <RWALiquidity text={liquidityAmount} />
                </Col>
          </Row>
    </Container>
  );
}

export default Liquidity;

