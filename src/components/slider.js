import React, { Component } from 'react'

class Slider extends Component {
  state = {
    hue: Math.ceil(Math.random() * 360),
    saturation: Math.ceil(Math.ceil(Math.random() * 100)),
    lightness: Math.ceil(Math.ceil(Math.random() * 100))
  }

  changeHue = event => {
    this.setState({
      hue: event.target.value
    })
  }

  changeSaturation = event => {
    this.setState({
      saturation: event.target.value
    })
  }

  changeLightness = event => {
    this.setState({
      lightness: event.target.value
    })
  }

  randomColor = () => {
    this.setState({
      hue: Math.ceil(Math.random() * 360),
      saturation: Math.ceil(Math.ceil(Math.random() * 100)),
      lightness: Math.ceil(Math.ceil(Math.random() * 100))
    })
  }

  render() {
    return (
      <section>
        <div
          className="color-picker"
          style={{
            backgroundColor: `hsl(${this.state.hue},${this.state.saturation}%,${
              this.state.lightness
            }%)`,
            fontSize: '1rem'
          }}
        >
          <h1 className="hsl-slider"> Color picker </h1>
          <input
            className="hue-slider"
            type="range"
            max="100"
            min="0"
            value={this.state.value}
            onChange={this.changeHue}
          />
          <h3>Hue</h3>
          <input
            className="saturation-slider"
            type="range"
            max="100"
            min="0"
            value={this.state.value}
            onChange={this.changeSaturation}
          />
          <h3>Saturation</h3>
          <input
            className="lightness-slider"
            type="range"
            max="100"
            min="0"
            value={this.state.value}
            onChange={this.changeLightness}
          />
        </div>
        <h3>Lightness</h3>
      </section>
    )
  }
}

export default Slider
