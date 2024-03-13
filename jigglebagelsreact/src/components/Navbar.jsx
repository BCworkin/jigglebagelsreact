import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    background-color: #FFCBA4;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Left = styled.div`
    flex: 1;
`
const Middle = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer></SearchContainer>
            </Left>
            <Middle>
                JiggleBagels
            </Middle>
            <Right>
                Login
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar