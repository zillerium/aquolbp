import { useState } from 'react';
import {Row, Col } from "react-bootstrap";

const HouseList = ({ houses, selectedHouses, setSelectedHouses }) => {

    // State to track selected houses
    // Handle click event to toggle selection

    const toggleSelection = (house) => {
        setSelectedHouses(prev => {
            // Check if house is already selected
            const index = prev.findIndex(h => h.name === house.name);
            if (index > -1) {
                // Remove the house if it is already selected
                return prev.filter((_, i) => i !== index);
            } else {
                // Add the house and its liquidity if it is not selected
                return [...prev, { name: house.name, liquidity: house.liquidity }];
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
					    backgroundColor: selectedHouses.some(h => h.name === house.name) ? 'lightblue' : 'transparent'
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

