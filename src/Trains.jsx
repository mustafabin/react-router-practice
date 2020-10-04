import React from 'react';

function Trains(props) {
  const fromNow = (time) => {
    const difference = Math.ceil((new Date(time) - new Date()) / 60000);
    if (difference === 0) {
      return "Now"
    } else if (difference < 0) {
      return `${difference * -1} min ago`
    } else {
      return `${difference} min`
    }
  }

  return (
    <div className="arrivals-container">
      <h4>{props.direction}</h4>
      <div className="arrivals">
        {props.arrivals.map((train) => (
          <div className="single-train" key={`${train.route}-${train.time}`}>
            <div className={`logo route-${train.route}`}>{train.route}</div>
            <p>{fromNow(train.time)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trains;
