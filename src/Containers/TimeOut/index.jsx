import React, { useState, memo, useEffect } from "react";
const TimeOut = ({ time }) => {
  let [timeLeft, setTimeLeft] = useState(time);
  const [minute, setMinute] = useState(Math.floor(time / 60));
  const [seconds, setSeconds] = useState(time % 60);

  useEffect(() => {
    const timeOut = setInterval(() => {
      if (timeLeft === 0) {
        setSeconds(timeLeft % 60);
        clearInterval(timeOut);
      } else {
        setMinute(Math.floor(timeLeft / 60));
        setSeconds(timeLeft % 60);
        setTimeLeft(timeLeft--);
      }
    }, 1000);

    return () => {
      clearInterval(timeOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{`0${minute}:${("0" + seconds).slice(-2)}`}</span>;
};

export default memo(TimeOut);
