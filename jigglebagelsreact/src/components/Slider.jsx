import React from 'react'
import styled from 'styled-components'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: #FFFF8F;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;    
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };
    margin: auto;
    cursor: pointer;
    opacity: 1;
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <FaArrowLeft></FaArrowLeft>
        </Arrow>
        <Arrow direction="right">
            <FaArrowRight></FaArrowRight>
        </Arrow>
    </Container>

  )
}

export default Slider