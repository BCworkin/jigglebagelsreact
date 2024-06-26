import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    flex: 1;
    margin: 3px;
`

const Image = styled.div`
    width: 100%;
`

const Info = styled.div`
    
`

const Title = styled.div`
    
`

const Button = styled.div`
    
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/> 
      <Info>
        <Title>{item.Title}</Title>
        <Button>Shop now!</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem