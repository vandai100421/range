import React, { useEffect, useState, useRef } from "react";
import "./Range.css";

export const Range = () => {
  const [values, setValues] = useState(50);
  let _isDragging = useRef(false);

  const widthBtn = 50;
  let getleft;
  let elementParent;

  const [styles, setStyles] = useState({
    left: 0,
  });

  const startedDrag = (e) => {
    _isDragging.current = true;
    elementParent = e.target.parentNode;
    getleft = elementParent.getBoundingClientRect().left;
  };

  const handleEventMouseMove = (e) => {
    let currentX = e.screenX - getleft;
    if (currentX < widthBtn / 2) currentX = widthBtn / 2;
    if (currentX > elementParent.offsetWidth - widthBtn / 2)
      currentX = elementParent.offsetWidth - widthBtn / 2;
    if (_isDragging.current === true) {
      setStyles({ left: currentX - widthBtn / 2 });
      setValues(
        Math.round(
          ((currentX - widthBtn / 2) / (elementParent.offsetWidth - widthBtn)) *
            100
        )
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleEventMouseMove);

    window.addEventListener("mouseup", (e) => {
      _isDragging.current = false;
    });
  }, []);

  return (
    <div className="content">
      <div className="inputrange" style={{ "margin-left": 300 }}>
        <button className="btn" style={styles} onMouseDown={startedDrag}>
          {" "}
        </button>
      </div>
      <label htmlFor="">{values} (%)</label>
    </div>
  );
};
