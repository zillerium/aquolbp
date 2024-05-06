import React, { useState, useContext } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
// pages/index.js
import ArrowDefinition from '../components/ArrowDefinition';
import ArrowDefinitionDown from '../components/ArrowDefinitionDown';
import ArrowHeadVertical from '../components/ArrowHeadVertical';
import SVGBox from '../components/SVGBox';
import SVGLine from '../components/SVGLine';
import SVGLineArrow from '../components/SVGLineArrow';
import SVGLineArrowVertical from '../components/SVGLineArrowVertical';
import SVGLineArrowVerticalDown from '../components/SVGLineArrowVerticalDown';

const Liquidity = () => (
  <svg width="500px" height="300px" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
    <ArrowDefinition />
    <SVGBox x="50" y="75" imageSrc="spv.svg" id="box1" beginOpacity="0s" />
    <SVGBox x="200" y="75" imageSrc="rwa.svg" id="box2" beginOpacity="0.5s" />
    <SVGLineArrow x1="100" y1="100" x2="200" begin="1s" />
    <SVGBox x="350" y="75" imageSrc="srwa.svg" id="box3" beginOpacity="2.5s" />
    <SVGBox x="350" y="175" imageSrc="buyers.svg" id="box4" beginOpacity="5s" />

    <SVGLineArrow x1="250" y1="100" x2="350" begin="3s" />
	    <SVGLine x1="350" y1="195" x2="75" y2="195" begin="6s" />
    <SVGLineArrowVertical x="75" y1="195" y2="125" begin="7s" />
	    <ArrowHeadVertical x="75" y="115" begin="8s" />
    <SVGLineArrowVerticalDown x="375" y1="125" y2="175" begin="8s" />


  </svg>
);

export default Liquidity;

