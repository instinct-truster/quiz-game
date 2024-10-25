import { useEffect, useState, useRef } from "react";

function Timer({ setPause, questionNumber }) {
  const [timer, setTimer] = useState(30);
  const intervalRef = useRef();

  useEffect(() => {
    if (intervalRef.current !== undefined) {
      clearInterval(intervalRef.current);
    }

    if (timer === 0) {
      setPause(true);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [setPause, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <>{timer}</>;
}

export default Timer;
