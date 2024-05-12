import { useState } from 'react';
import {Row, Col } from "react-bootstrap";

const HouseList = ({ houses }) => {
    // State to track selected houses
    const [selectedHouses, setSelectedHouses] = useState([]);

    // Handle click event to toggle selection
    const toggleSelection = (house) => {
        setSelectedHouses(prev => {
            const houseName = house.name; // Use the name property for identification
            if (prev.includes(houseName)) {
                // If already selected, remove from selection
                return prev.filter(h => h !== houseName);
            } else {
                // If not selected, add to selection
                return [...prev, houseName];
            }
        });
    };

    return (
       <Row>
            <Col md={6}> {/* Adjust the md value based on your layout needs */}
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {houses.map(house => (
                            <li key={house.name} style={{
                                padding: '8px',
                                cursor: 'pointer',
                                backgroundColor: selectedHouses.includes(house.name) ? 'lightblue' : 'transparent'
                            }} onClick={() => toggleSelection(house)}>
                                {house.name} ({house.liquidity})
                            </li>
                        ))}
                    </ul>
                </div>
            </Col>
        </Row>
    );
};

export default HouseList;

