import { useState } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';

function USDTrade() {
    const [usdAmount, setUsdAmount] = useState(0);

    const handleInputChange = (event) => {
        setUsdAmount(event.target.value);
    };

    return (
        <Form.Control
            type="number"
            value={usdAmount}
            onChange={handleInputChange}
            placeholder="Amount"
	                style={{ width: '200px' }}  // Set width to 300px

        />
    );
}
export default USDTrade;
