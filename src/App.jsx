import React, { useState } from "react";
import "./App.css";
export const App = () => {
  const [values, setValues] = useState(50);
  const [isdragging, setIsdragging] = useState(false);
  const [styles, setStyles] = useState({
    left: 500,
    "background-color": "#fff",
  });

  const dragging = (e) => {
    let currentX = e.screenX - 25;
    // console.log(currentX, "-----", e.target.getBoundingClientRect());
    if (isdragging === true) {
      e.preventDefault();
      // let _x= e.currentTarget.getBoundingClientRect().top;
      setStyles({
        left: currentX,
        // ["background-color"]: "#" + ((currentX + 25) / 1000) * 255,
      });
      setValues(Math.round(((currentX + 25) / 1000) * 100));
    }
  };
  const startedDrag = (e) => {
    setIsdragging(true);
    console.log("start");
  };
  const stoppedDrag = (e) => {
    setIsdragging(false);
    console.log("end");
  };

  return (
    <div className="content" onMouseMove={dragging} onMouseUp={stoppedDrag}>
      <div className="inputrange">
        <button className="btn" style={styles} onMouseDown={startedDrag}>
          {" "}
        </button>
      </div>
      <label htmlFor="">{values} (%)</label>
    </div>
  );
};
