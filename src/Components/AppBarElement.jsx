import React from 'react'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 30px;
  margin-bottom: 0px;
  margin-left: 10px;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #455a64;
    `};
`
const Icon = styled.div`
  min-height: 20px;
  min-width: 20px;
  margin-bottom: 0px;
  margin-right: 5px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`

const Label = styled.div`
  font-size: 0.8em;
`

const Link = ({ onClick, isSelected, color, name }) => (
  <Wrapper onClick={onClick} isSelected={isSelected}>
    <Icon color={color} />
    <Label>{name}</Label>
  </Wrapper>
)

export default Link
