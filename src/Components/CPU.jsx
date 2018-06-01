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
  font-size: 30px;
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
  stroke-width: 28;
  stroke-dasharray: 157 157;
  stroke-dashoffset: 157;
  stroke: rgba(255, 255, 255, 0.15);
  fill: none;
`

const MeterActive = styled.circle`
  stroke-width: 28;
  stroke-dasharray: ${({ value }) =>
    `${value * 157 / 100} ${314 - value * 157 / 100}`};
  stroke-dashoffset: 157;
  stroke: ${({ value }) => (value <= 75 ? '#4CAF50' : '#f44336')};
  fill: none;
  transition: all 0.2s ease;
`

const MeterClock = styled.polygon`
  transform: ${({ value }) => `rotate(${-90 + value * 180 / 100}deg)`};
  transform-origin: 64px 112px;
  fill: #212121;
  transition: transform 0.2s ease;
`

const MeterCircle = styled.circle`
  fill: #212121;
`

class CPU extends React.Component {
  state = {
    value: 20,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        value: this.getCPU(),
      })
    }, 1000)
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
        <Title>CPU</Title>
        <Meter>
          <MeterBg r="50" cx="64" cy="112" />
          <MeterActive value={this.state.value} r="50" cx="64" cy="112" />
          <MeterClock value={this.state.value} points="56,112 64,57 72,112" />
          <MeterCircle r="10" cx="64" cy="112" />
        </Meter>
        <Percents>{this.state.value}%</Percents>
      </Wrapper>
    )
  }
}

export default CPU
