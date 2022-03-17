import React, { useEffect, useState } from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [count, setCount] = useState(0);

  const time = setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  useEffect(() => {
    time;
  }, [count]);

  return (
    <li key={timerId} id={timerId} className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{count} seconds</p>
      <div className="btn btn-danger" onClick={() => removeTimer(timerId)}>
        Delete
      </div>
    </li>
  );
};
