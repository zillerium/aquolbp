import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RWATokenList from '../components/RWATokenList';
import USDCoinList from '../components/USDCoinList';
import HouseTrade from '../components/HouseTrade';
import USDTrade from '../components/USDTrade';
import { WalletContext } from "../lib/WalletContext";
import WalletSign from "../components/WalletSign";
import WalletControls from "../components/WalletControls";
import WalletDetails from "../components/WalletDetails";
function Trade() {
    return (
        <Container className="mt-5">
	          <WalletControls />

        {/* Row for Wallet Details */}
          <WalletDetails />
            <h1 className="text-center">Trade Tokens</h1>
	    <p>This is a simulation for trading RWA tokens via a pool for stablecoins.</p>
            {/* Row for the House trading input and dropdown, centered */}
            <Row className="justify-content-center">
                <Col xs="auto" className="d-flex align-items-center">
                    <USDTrade />  {/* Textbox for entering amounts */}
                    <div style={{ width: '120px' }}></div> {/* Spacer div for controlled space */}
                    <RWATokenList />  {/* Dropdown to select an option */}
                </Col>
            </Row>

            {/* Row for the USD trading input and dropdown, centered */}
            <Row className="justify-content-center">
                <Col xs="auto" className="d-flex align-items-center">
                    <USDTrade />  {/* Textbox for entering amounts */}
                    <div style={{ width: '120px' }}></div> {/* Spacer div for controlled space */}
                    <USDCoinList />  {/* Dropdown to select an option */}
                </Col>
            </Row>
        </Container>
    );
}

export default Trade;

