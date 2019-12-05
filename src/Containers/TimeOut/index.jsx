import React, { useState, memo, useEffect } from "react";
const TimeOut = ({ time }) => {
  const [minute, setMinute] = useState(Math.floor(time / 60));
  const [seconds, setSeconds] = useState(time % 60);

  useEffect(() => {
    if (time) {
      startTimeout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimeout = () => {
    const timeOut = setInterval(() => {
      if (time === 0) {
        setSeconds(time % 60);
        clearInterval(timeOut);
      } else {
        setMinute(Math.floor(time / 60));
        setSeconds(time % 60);
        time--;
      }
    }, 1000);
  };

  return <span>{`0${minute}:${("0" + seconds).slice(-2)}`}</span>;
};

export default memo(TimeOut);
