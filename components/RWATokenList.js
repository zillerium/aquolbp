import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

function RWATokenList() {
    const [selectedHouse, setSelectedHouse] = useState('');

    const handleDropdownChange = (event) => {
        setSelectedHouse(event.target.value);
    };

    return (
        <Form.Group as={Row} className="mb-3">
	        <Form.Label column sm="2">
            </Form.Label>
                <Form.Select 
                    value={selectedHouse} 
                    onChange={handleDropdownChange}
                    style={{ width: '200px', minWidth: '160px' }} // Width as required for "House4"
                >
                    <option value="">Choose...</option>
                    <option value="House1">House1</option>
                    <option value="House2">House2</option>
                    <option value="House3">House3</option>
                    <option value="House4">House4</option>
                    <option value="House5">House5</option>
                </Form.Select>
        </Form.Group>
    );
}

export default RWATokenList;

