import { useState } from 'react';
const MoneyInput = ({ value, onChange }) => {
    const handleChange = (event) => {
        let inputValue = event.target.value;

        // Only accept numbers and a single dot
        inputValue = inputValue.replace(/[^0-9.]/g, '');

        // Match the input format for money (up to two decimal places)
        if (/^(0|[1-9]\d*)(\.\d{0,2})?$/.test(inputValue)) {
            onChange(inputValue);  // Update using parent's handler
        }
    };

    // Function to format the input when user leaves the input field
    const handleBlur = () => {
        if (value !== '') {
            onChange(parseFloat(value).toFixed(2));  // Format the current prop value
        }
    };

    return (
        <input
            type="text"
            value={value}  // Use value from props
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter amount in USDC"
        />
    );
};


export default MoneyInput;

