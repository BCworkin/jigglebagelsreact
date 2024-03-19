import React from 'react'
import styled, {keyframes} from 'styled-components'

const moveBanner = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
    height: 30px;
    background-color: darksalmon;
    color: black;
    padding: 3px;
    /* display: flex; */
    align-items: center;
    justify-content: center;
` 

const Sentence = styled.div`
  font-size: 14px;
  animation: ${moveBanner} 20s linear infinite ;
`

const Announcement = () => {
  return (
    <Container>
      <Sentence>
        Free delivery for orders above $30!
      </Sentence>
    </Container>
  )
}

export default Announcement