import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Ball from './Ball';
import ParticlesBg from 'particles-bg'
import './lotto.css';

const getNumbers = () => {
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [ ...winNumbers, bonusNumber ];
}

function Lotto() {
  const lottoNumbers = useMemo(() => getNumbers(), []);
  const [winBalls, setWinBalls] = useState([]);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for(let i = 0; i < winNumbers.length - 1; i++){
      timeouts.current[i] = setTimeout(() => {
          setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
       }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
    }, 7000);

    timeouts.current[7] = setTimeout(() => {
      setRedo(true);
    }, 8500);

    return () => {
      timeouts.current.forEach((v) => {clearTimeout(v)});
    }

}, [timeouts.current]);

const onClickRedo = useCallback(() => {
  setWinNumbers(getNumbers());
  setWinBalls([]);
  setBonus(null);
  setRedo(false);
  timeouts.current = [];
}, [winNumbers]);

  return (
    <div className="lotto">
      <div className="numbers">
        <span>💸 당첨 숫자 💸</span>
        <div className="result">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
      </div>
      {bonus &&
        <div className="bonus">
          <span>보너스 🎈</span>
          <Ball number={bonus} />
      </div>}
        {redo && <button className="redo" onClick={onClickRedo}>한 번 더!</button>}
        <ParticlesBg type="color" config={{ position: "center" }} bg={true} />
    </div>
  )
}

export default Lotto
