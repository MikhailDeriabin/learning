import { useState, useEffect } from 'react';

type Props = {
  timer: number
}

export default function ProgressBar({ timer }: Props) {
  const [remainingTime, setRemainingTime] = useState<number>(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
