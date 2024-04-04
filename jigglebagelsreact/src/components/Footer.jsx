import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
    background-color: lightblue;
    display: flex;
    height: 150vh; 
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 40px;
`

const Center = styled.div`
flex: 1;
    
`
    
const Title = styled.h1`
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 75%;
    margin-bottom: 10px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid #333;
    }    
`

const InputContainer = styled.div`
    /* border: 1px solid black; */
    display: inline-flex;
    border-radius: 20px;
    border: 2px solid black;
    padding: 10px;
    max-width: 300px;
    
`

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`

const SocialContainer = styled.div`
display: inline-flex;
padding: 30px;
`

const SocialIcon = styled.div`
    font-size: 20px;
    padding: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`

const ContactItem = styled.div`
    width: 75%;
    margin-bottom: 10px;
    font-size: 18px;
`

const Right = styled.div`
    flex: 1;
`


const Footer = () => {
  return (
    <Container>
        <Left>
            <Title>Subscribe to us!</Title>
            <InputContainer>
                <Input type="text" placeholder="Enter your email"></Input>
            </InputContainer>
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
        </Left>
        <Center>
            <Title>Connect with us!</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>FAQ</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Delivery Areas</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>Ampang Hill</ContactItem>
            <ContactItem>+6012345678</ContactItem>
            <ContactItem>contact@gmail.com</ContactItem>
        </Right>

    </Container>
    )
}

export default Footer