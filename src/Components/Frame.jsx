import React from 'react'
import styled from 'styled-components'

const StyledFrame = styled.div`
  height: calc(100vh - 31px);
`

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #37474f;
`

const IFrame = styled.iframe`
  height: 100%;
  width: 100%;
  border: none;
  display: ${({ loaded }) => (loaded ? 'block' : 'none')};
`

class Frame extends React.Component {
  state = {
    isLoaded: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return { isLoaded: false }
  }

  handleLoad = () => {
    this.setState({ isLoaded: true })
  }

  render() {
    return (
      <StyledFrame>
        {this.state.url}
        {!this.state.isLoaded && <Loading />}
        <IFrame
          onLoad={this.handleLoad}
          loaded={this.state.isLoaded}
          title="perdu"
          src={this.props.url}
        />
      </StyledFrame>
    )
  }
}

export default Frame
