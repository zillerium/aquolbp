import { useState } from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';
function HouseTrade() {
    const [houseAmount, setHouseAmount] = useState(0);

    const handleInputChange = (event) => {
        setHouseAmount(event.target.value);
    };

    return (
        <Form.Control
            type="number"
            value={houseAmount}
            onChange={handleInputChange}
            placeholder="Amount"
            style={{ width: '200px' }}  // Set width to 300px

        />
    );
}
export default HouseTrade;
