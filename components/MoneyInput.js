import { useState } from 'react';

const MoneyInput = () => {
    const [amount, setAmount] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;

        // Only accept numbers and a single dot
        value = value.replace(/[^0-9.]/g, '');

        // Match the input format for money (up to two decimal places)
        const match = value.match(/^(0|[1-9]\d*)(\.\d{0,2})?$/);
        
        // If the input is valid, update the state
        if (match) {
            setAmount(value);
        }
    };

    // Function to format the input when user leaves the input field
    const handleBlur = () => {
        if (amount !== '') {
            setAmount(parseFloat(amount).toFixed(2));
        }
    };

    return (
        <input
            type="text"
            value={amount}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter amount in USDC"
        />
    );
};

export default MoneyInput;

