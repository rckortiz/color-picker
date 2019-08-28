import React, { useState } from 'react'

const Colors = () => {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))

  const randomColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.ceil(Math.random() * 100)))
    setLightness(Math.ceil(Math.ceil(Math.random() * 100)))
  }

  return (
    <section>
      <div
        className="color-picker"
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
          fontSize: '1rem'
        }}
      >
        <h1 className="hsl-slider"> Color picker </h1>
        <input
          className="hue-slider"
          type="range"
          max="100"
          min="0"
          value={hue}
          onChange={e => {
            setHue(e.target.value)
          }}
        />
        <h3>{hue}</h3>
        <input
          className="saturation-slider"
          type="range"
          max="100"
          min="0"
          value={saturation}
          onChange={e => {
            setSaturation(e.target.value)
          }}
        />
        <h3>{saturation}</h3>
        <input
          className="lightness-slider"
          type="range"
          max="100"
          min="0"
          value={lightness}
          onChange={e => {
            setLightness(e.target.value)
          }}
        />
        <h3>Lightness</h3>
      </div>
    </section>
  )
}

export default Colors
