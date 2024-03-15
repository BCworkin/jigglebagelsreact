import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: darksalmon;
    color: black;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
` 

const Announcement = () => {
  return (
    <Container>
        Free delivery for orders above $30!
    </Container>
  )
}

export default Announcement