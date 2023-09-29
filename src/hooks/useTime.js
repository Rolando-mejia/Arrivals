import { useState, useEffect } from "react";

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return {
    time: time.toTimeString().substring(0, 5),
  };
};