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

const Title = styled.span`
  display: inline-block;
  width: 200px;
  text-align: center;
  border-width: 0;
  font-size: 30px;
  font-weight: 900;
  color: white;
`

const Percents = styled.span`
  display: inline-block;
  width: 200px;
  text-align: center;
  border-width: 0;
  font-size: 20;
  font-weight: 900;
  color: white;
`

const Meter = styled.svg`
  display: block;
  width: 128px;
  height: 160px;
  margin: 0 auto;
`

const MeterBg = styled.circle`
  stroke-width: 20;
  stroke: rgba(255, 255, 255, 0.15);
  fill: none;
`

const MeterActive = styled.circle`
  stroke-width: 28;
  stroke-dasharray: ${({ value }) =>
    `${value * 314 / 100} ${314 - value * 314 / 100}`};
  stroke-dashoffset: 157;
  stroke: ${({ value }) => (value <= 75 ? '#4CAF50' : '#f44336')};
  fill: none;
  transition: all 0.2s ease;
`

class MEM extends React.Component {
  state = {
    value: 20,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        value: this.getCPU(),
      })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getCPU() {
    // from https://codepen.io/tonybanik/pen/yjbwXX
    const average = 25
    const plus_minus = () => Math.random() * (10 - -10) + -10
    const spike = Math.random() * (25 - 0) + 0 > 24
    const max = spike ? 95 : average + plus_minus()
    const min = spike ? 85 : average + plus_minus()
    const num = Math.random() * (max - min) + min
    const value = Math.abs(num)
    return Math.round(value)
  }

  render() {
    return (
      <Wrapper>
        <Title>MEM</Title>
        <Meter>
          <MeterBg r="50" cx="64" cy="80" />
          <MeterActive value={this.state.value} r="50" cx="64" cy="80" />
        </Meter>
        <Percents>{this.state.value * 8 / 100}Gb / 8Gb</Percents>
      </Wrapper>
    )
  }
}

export default MEM
