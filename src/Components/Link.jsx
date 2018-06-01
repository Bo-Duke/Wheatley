import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
  cursor: pointer;
`
const Icon = styled.div`
  min-height: 100px;
  min-width: 100px;
  margin-bottom: 10px;
  margin-right: 0px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`

const Label = styled.div`
  font-size: 1em;
`

const Link = ({ onClick, color, name }) => (
  <Wrapper onClick={onClick}>
    <Icon color={color} />
    <Label>{name}</Label>
  </Wrapper>
)

export default Link
