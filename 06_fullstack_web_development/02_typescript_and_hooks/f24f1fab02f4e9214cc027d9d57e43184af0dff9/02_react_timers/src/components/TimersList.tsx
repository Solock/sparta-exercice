import React, { useState } from "react";
import { Timer } from "./Timer";
import { v4 as uuidv4 } from "uuid";

type Timer = {
  id: string;
};

const TimersList: React.FC = () => {
  const [timer, setTimer] = useState<string[]>([]);

  function addTime(): void {
    const idTimer = uuidv4();
    setTimer([...timer, idTimer]);
  }
  function removeTimer(timerId: string): void {
    return console.log(timerId);
  }
  return (
    <ul id="listTimer" className="list-group timers-list">
      <li className="list-group-item text-center">
        <button id="Add a timer" className="btn btn-primary" onClick={addTime}>
          Add timer
        </button>
      </li>
      {timer.map((timerList) => {
        return <Timer key={timerList} timerId={timerList} removeTimer={removeTimer} />;
      })}
    </ul>
  );
};

export default TimersList;
