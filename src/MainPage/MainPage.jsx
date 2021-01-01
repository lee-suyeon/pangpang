import React from 'react'
import ParticlesBg from 'particles-bg'
import './main-page.css';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-page">
      <span className="new-year">🐮 2021 🐮</span>
      <h1 className="main-text">
        현디팡<br /> 
        로또팡
      </h1>
      <div className="start">
        <span className="pang">🎊</span>
        <p>👇 로또 당첨되면 10% 줄 사람만 👇</p>
        <Link to="/lotto">
          <button className="start-button">START</button>
        </Link>
      </div>
      <ParticlesBg type="fountain" config={{ position: "center" }} bg={true} />
    </div>
  )
}

export default MainPage
