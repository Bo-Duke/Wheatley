import React from 'react'
import styled from 'styled-components'

import AppBarElement from './AppBarElement'

const ElementsWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
  color: white;
`

const Wrapper = styled.div`
  display: flex;
  background-color: #263238;
  align-items: center;
  border-bottom: 2px solid black;
`

const Home = styled.div`
  font-size: 0.8em;
  cursor: pointer;
  margin-left: 15px;
`

const FullScreen = styled.a`
  margin-right: 15px;
  color: white;
  text-decoration: none;
`

const Link = ({ onClick, items, selected }) => (
  <Wrapper>
    <Home onClick={() => onClick(null)}>Home</Home>
    <ElementsWrapper>
      {items.map(item => (
        <AppBarElement
          onClick={() => onClick(item)}
          name={item.name}
          color={item.color}
          isSelected={selected === item}
        />
      ))}
    </ElementsWrapper>
    <FullScreen href={selected.url}>[↗]</FullScreen>
  </Wrapper>
)

export default Link
