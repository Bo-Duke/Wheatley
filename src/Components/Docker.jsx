import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  text-align: center;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const Grid = styled.div`
  display: grid;
  height: 150px;
  width: 150px;
  grid-template-columns: ${({ num }) =>
    `repeat(${Math.ceil(Math.sqrt(num))}, 1fr)`};
  grid-template-rows: ${({ num }) =>
    `repeat(${Math.ceil(Math.sqrt(num))}, 1fr)`};
  grid-gap: 4px;
`

const Element = styled.div`
  background-color: #00adb5;
  width: 100%;
  height: 100%;
`

const Title = styled.span`
  display: inline-block;
  width: 200px;
  text-align: center;
  border-width: 0;
  font-size: 30px;
  font-weight: 900;
  color: white;
`

const Containers = styled.span`
  display: inline-block;
  width: 200px;
  text-align: center;
  border-width: 0;
  font-size: 20px;
  font-weight: 900;
  color: white;
`

class Docker extends React.Component {
  state = {
    containers: [...Array(20)],
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        containers: [...Array(this.getContainers())],
      })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getContainers() {
    return Math.floor(Math.random() * 50)
  }

  render() {
    return (
      <Wrapper>
        <Title>Docker</Title>
        <Grid num={this.state.containers.length}>
          {this.state.containers.map(el => <Element />)}
        </Grid>
        <Containers>{this.state.containers.length} containers</Containers>
      </Wrapper>
    )
  }
}

export default Docker
