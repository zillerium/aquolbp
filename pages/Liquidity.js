import React, { useState, useContext } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
// pages/index.js
import ArrowDefinition from '../components/ArrowDefinition';
import SVGBox from '../components/SVGBox';
import SVGLine from '../components/SVGLine';

const Liquidity = () => (
  <svg width="500px" height="200px" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
    <ArrowDefinition />
    <SVGBox x="50" y="75" imageSrc="spv.svg" id="box1" beginOpacity="0s" />
    <SVGBox x="200" y="75" imageSrc="rwa.svg" id="box2" beginOpacity="0.5s" />
    <SVGLine x1="100" y1="100" x2="200" begin="1s" />
    <SVGBox x="350" y="75" imageSrc="srwa.svg" id="box3" beginOpacity="2.5s" />

    <SVGLine x1="250" y1="100" x2="350" begin="3s" />
  </svg>
);

export default Liquidity;

