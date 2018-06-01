import React from 'react'
import styled from 'styled-components'

import Link from './Link'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const Links = ({ items, onClick }) => (
  <Wrapper>
    {items.map(item => (
      <Link
        key={item.url}
        onClick={() => onClick(item)}
        name={item.name}
        color={item.color}
      />
    ))}
  </Wrapper>
)

export default Links
