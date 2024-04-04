import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { Badge } from "@mui/material"

const Container = styled.div`
    height: 80px;
    width: 100vw;
    background-color: #FFCBA4;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Language = styled.span`
    font-size: 18px;
    align-items: center;
    cursor: pointer;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Middle = styled.div`
    flex: 1;
    text-align: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Logo = styled.h1`
    font-weight: bold;
`

const SearchContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid #333;
    }
    margin: 12px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <FaSearch style={{color:"gray", fontSize: 16, padding: 8, cursor: 'pointer'}}/>
                </SearchContainer>
            </Left>
            <Middle>
                <Logo>
                    JiggleBagels.
                </Logo>
            </Middle>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={1} color="primary">
                        <FaShoppingCart/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar