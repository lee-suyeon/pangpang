import React, { memo } from 'react';

const Ball = memo(({number}) => {
  let background;
    if(number <= 10) {
      background = '#FFC312';
    } else if(number <= 20){
      background = '#A3CB38';
    } else if(number <= 30){
      background = '#1e90ff';
    } else if(number <= 40){
      background = '#ff4757';
    } else {
      background = '#5758BB';
    }
    return (
    <div className="ball" style={{ background }}>{number}</div>
    )
});

export default Ball
