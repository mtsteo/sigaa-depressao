import React from "react";
import { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  const [years, setYears] = useState(0);
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

    setYears(years);
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

  const blockStyle = {
    display: "inline-block",
    margin: "3px",
    padding: "10px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  return (
    <div style={timerStyle}>
      <div>
        O SIGAA está a
      </div>
      <br></br>

      <div id="timer" style={timerStyle}>
        {/* <div style={blockStyle}>
          <div>{years}</div>
          <span>Anos</span>
        </div> */}
        <div style={blockStyle}>
          <div>{months}</div>
          <span>Meses</span>
        </div>
        <div style={blockStyle}>
          <div>{days}</div>
          <span>Dias</span>
        </div>
        <div style={blockStyle}>
          <div>{hours}</div>
          <span>Horas</span>
        </div>
        <div style={blockStyle}>
          <div>{minutes}</div>
          <span>Min</span>
        </div>
        <div style={blockStyle}>
          <div>{seconds}</div>
          <span>Seg</span>
        </div>
      </div>
      <br></br>
      <div>
        sem cair...
      </div>
    </div>
  );
};

export default Timer;
