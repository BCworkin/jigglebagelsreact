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
    width: 100%;
    background-color: darksalmon;
    color: black;
    align-items: center;
    justify-content: center;
    overflow: hidden;
` 

const Sentence = styled.div`
  font-size: 14px;
  animation: ${moveBanner} 16s linear infinite ;
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