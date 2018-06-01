import React, { Fragment } from 'react'
import { render } from 'react-dom'
import styled, { css } from 'styled-components'

import items from './items.json'

import Links from './Components/Links'
import AppBar from './Components/AppBar'
import Frame from './Components/Frame'
import CPU from './Components/CPU'
import MEM from './Components/MEM'
import Docker from './Components/Docker'

const Wrapper = styled.div`
  text-align: center;
`

const Monitors = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 100px;
  margin-bottom: 100px;
`

class App extends React.Component {
  state = {
    frame: null,
  }

  TopPart = () => (
    <Fragment>
      <h1>Wheatley</h1>
      <Monitors>
        <CPU />
        <MEM />
        <Docker />
      </Monitors>
    </Fragment>
  )

  selectFrame = frame => {
    if (frame !== this.state.frame) {
      this.setState({
        frame,
      })
    }
  }

  render() {
    return (
      <Wrapper>
        {!this.state.frame && this.TopPart()}
        {this.state.frame ? (
          <AppBar
            onClick={this.selectFrame}
            items={items}
            selected={this.state.frame}
          />
        ) : (
          <Links onClick={this.selectFrame} items={items} />
        )}
        {this.state.frame && <Frame url={this.state.frame.url} />}
      </Wrapper>
    )
  }
}

render(<App />, document.getElementById('root'))
