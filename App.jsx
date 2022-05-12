import React from "react";
import { Range } from "./component/Range";

import './App.css'

export const App = () => {
  return (
    <div className="App">
      <Range />
      <div className="test1">
          <Range />
      </div>
      <ul>
        <li className="range_2">
          <Range />
        </li>
        <li className="range_3">
          <Range />
        </li>
      </ul>
    </div>
  );
};
