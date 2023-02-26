/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Instructions from "./Instructions";
import "./App.css";

const App = () => {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (on) {
      setCount(count + 1);
      setTimeout(() => {
        setOn(false);
      }, 2000);
    }
    console.log(on);
  }, [on]);

  useEffect(() => {
    if (count >= 10) alert("No more light for you. Use a candle!");

    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <>
      <div className="block">
        <Instructions />
      </div>

      <div className={`block ${on ? "night" : ""}`}>
        <a onClick={(e) => setOn(!on)}> turn me on! </a>
        <div className="container">
          <div className="bulb-light">
            <div id="light" />

            <div id="bulb">
              <div className="bulb-top">
                <div className="reflection" />
              </div>
              <div className="bulb-middle-1" />
              <div className="bulb-middle-2" />
              <div className="bulb-middle-3" />
              <div className="bulb-bottom" />
            </div>

            <div id="base">
              <div className="screw-top" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-c" />
              <div className="screw-d" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
