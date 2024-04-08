import React from 'react'
import styled from 'styled-components'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import bagel from './bagel.jpg'

const Container = styled.div`
    width: 100%;
    height: 200vh;
    display: flex;
    position: relative;
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

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    height: 100vw;
    flex: 1;
`

const Image = styled.img`
    height: 40%;
    width: 80%;
    margin: 20px;
`

const InfoContainer = styled.div`
    flex: 1;
    height: 70vw;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    align-items: center;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        {/* <Arrow direction="left">
            <FaArrowLeft />
        </Arrow> */}
        <Wrapper>
            <Slide>
                <ImageContainer>
                    <Image src={bagel} />
                </ImageContainer>
                <InfoContainer>
                    <Title>Hot Damn Bagels!</Title>
                    <Desc>Check out our tasty deals that pair our bagels with sweet and savoury sour cream!</Desc>
                    <Button>Show it to me!</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        {/* <Arrow direction="right">
            <FaArrowRight />
        </Arrow> */}
    </Container>
  )
}

export default Slider