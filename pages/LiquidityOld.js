import React, { useState, useContext } from "react";
import { Button, Form, Card, Row, Col, Container } from "react-bootstrap";
// pages/index.js
import ArrowDefinition from '../components/ArrowDefinition';
import ArrowDefinitionDown from '../components/ArrowDefinitionDown';
import ArrowHeadVertical from '../components/ArrowHeadVertical';
import ArrowHeadVerticalDown from '../components/ArrowHeadVerticalDown';
import SVGBox from '../components/SVGBox';
import SVGLine from '../components/SVGLine';
import SVGLineArrow from '../components/SVGLineArrow';
import SVGLineArrowVertical from '../components/SVGLineArrowVertical';
import SVGLineArrowVerticalDown from '../components/SVGLineArrowVerticalDown';

const Liquidity = () => (
  <svg width="700px" height="300px" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
    <ArrowDefinition />
    <SVGBox x="600" y="50" imageSrc="investors.svg" id="box7" beginOpacity="0s" />
    <SVGLineArrow x1="600" y1="75" x2="550" begin="1s" />
    <SVGBox x="500" y="50" imageSrc="lps.svg" id="box8" beginOpacity="0.5s" />
    
    <SVGBox x="50" y="150" imageSrc="spv.svg" id="box1" beginOpacity="2s" />
    <SVGBox x="200" y="150" imageSrc="rwa.svg" id="box2" beginOpacity="2.5s" />
    <SVGLineArrow x1="100" y1="175" x2="200" begin="3s" />
    <SVGBox x="350" y="150" imageSrc="srwa.svg" id="box3" beginOpacity="4s" />
    <SVGLineArrow x1="250" y1="175" x2="350" begin="4.5s" />
    <SVGBox x="350" y="250" imageSrc="buyers.svg" id="box4" beginOpacity="5.5s" />
    <SVGLineArrowVerticalDown x="375" y1="200" y2="250" begin="6s" />
    <ArrowHeadVerticalDown x="375" y="250" begin="7s" />

    <SVGLine x1="350" y1="270" x2="75" y2="270" begin="8s" />
    <SVGLineArrowVertical x="75" y1="270" y2="200" begin="9s" />
    <ArrowHeadVertical x="75" y="190" begin="10s" />

    <SVGBox x="500" y="250" imageSrc="ammdemo.svg" id="box5" beginOpacity="10.5s" />
    <SVGLineArrowVerticalDown x="525" y1="100" y2="150" begin="11.5s" />
    <SVGLineArrow x1="400" y1="270" x2="500" begin="11.5s" />
    <ArrowHeadVerticalDown x="525" y="150" begin="12.5s" />
    <SVGBox x="500" y="150" imageSrc="susd.svg" id="box6" beginOpacity="11s" />
    <SVGLineArrowVerticalDown x="525" y1="200" y2="250" begin="14s" />
    <ArrowHeadVerticalDown x="525" y="250" begin="15s" />

  </svg>
);

export default Liquidity;

