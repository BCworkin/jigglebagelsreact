import { Button } from '@mui/material'
import React from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    height:100vw;
`

const Left = styled.div``

const Title = styled.div``

const InputContainer = styled.div``

const Input = styled.div``

const Center = styled.div``

const SocialContainer = styled.div``

const SocialIcon = styled.div``

const Right = styled.div``


const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>Subscribe to us!</Title>
            <InputContainer>
                <Input placeholder="Eter your email"></Input>
            </InputContainer>
            <Button>
                <FaArrowRight/>
            </Button>
        </Left>
        <Center>
            <SocialContainer>
                <SocialIcon>
                    <FaFacebook/>
                </SocialIcon>
                <SocialIcon>
                    <FaInstagram/>
                </SocialIcon>
                <SocialIcon>
                    <FaTiktok/>
                </SocialIcon>
            </SocialContainer>
        </Center>
        <Right>

        </Right>

    </Container>
    )
}

export default Footer