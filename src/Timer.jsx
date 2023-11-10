import React from "react";
import { useState, useEffect } from "react";


const Timer = () => {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const past = Date.parse("2023-11-9 00:00:00");
    const now = new Date();
    const diff = now - past;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    setMonths(months - years * 12);
    setDays(days - months * 30);
    setHours(hours - days * 24);
    setMinutes(mins - hours * 60);
    setSeconds(secs - mins * 60);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyle = {
    textAlign: "center",
  };


  return (
    <>
      <div style={timerStyle}>
        <div className="info">O SIGAA está a</div>

        <div id="timer" style={timerStyle}>
         
          <div className="blockStyle">
            <div className="numbers">{months}</div>
            <span className="spanF">Meses</span>
          </div>
          <div className="blockStyle">
            <div className="numbers">{days}</div>
            <span className="spanF">Dias</span>
          </div>
          <div className="blockStyle">
            <div className="numbers">{hours}</div>
            <span className="spanF">Horas</span>
          </div>
          <div className="blockStyle">
            <div className="numbers">{minutes}</div>
            <span className="spanF">Min</span>
          </div>
          <div className="blockStyle">
            <div className="numbers">{seconds}</div>
            <span className="spanF">Seg</span>
          </div>
        </div>
        <div className="info">sem cair...</div>
      </div>
      
    </>
  );
};

export default Timer;
