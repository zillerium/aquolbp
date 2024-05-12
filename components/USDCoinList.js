import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function USDCoinList() {
    const [selectedCoin, setSelectedCoin] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedCoin(event.target.value);
        console.log("Selected Stablecoin:", event.target.value);
    };

    return (
        <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
            </Form.Label>
	    <Form.Select 
                    value={selectedCoin} 
                    onChange={handleDropdownChange}
                    style={{ width: '200px', minWidth: '160px' }} // Width as required for "House4"
                >
                    <option value="">Choose...</option>
                    <option value="USDC">USDC</option>
                    <option value="USDT">USDT</option>
                </Form.Select>
        </Form.Group>
    );
}

export default USDCoinList;

