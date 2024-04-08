import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 8vh;
    justify-content: center;
    width: 100%; 
    background-color: #FFCBA4;
`

const NavBarItem = styled.div`
    display: inline-flex;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid #333;
    }
    margin: 12px;
`


export const NavBarLower = () => {
  return (
    <Container>
        <NavBarItem>
            Bagels
        </NavBarItem>
        <NavBarItem>
            Cream Cheese
        </NavBarItem>
        <NavBarItem>
            Seasonal Specials
        </NavBarItem>
        <NavBarItem>
            Delivery Areas
        </NavBarItem>
        <NavBarItem>
            FAQ
        </NavBarItem>
        <NavBarItem>
            Contact us
        </NavBarItem>    
    </Container>
  )
}
export default NavBarLower
