import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const RouletteWheel = ({ state, dispatch }) => {
  const wheelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initWheel();
  }, []);

  const initWheel = () => {
    const wheel = wheelRef.current;
    const images = {
      "0": "/images/pile-of-money.webp",
      "1": "/images/sport-car.webp",
      "2": "/images/private-jet.png",
      "3": "/images/logo.webp",
      "4": "/images/diamond.png",
      "5": "/images/ipad.png",
      "6": "/images/rolex.png",
      "7": "/images/necless.png",
      "8": "/images/gold-bar.png",
      "9": "/images/pile-of-money.webp",
      "10": "/images/logo.webp",
      "11": "/images/rolex.png",
      "12": "/images/gold-bar.png",
      "13": "/images/diamond.png",
      "14": "/images/macbook.png",
    };
    if (wheel) {
      let row = `
      <div class='row flex'>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["1"]}' alt='1'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["14"]}' alt='14'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["2"]}' alt='2'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["13"]}' alt='13'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["3"]}' alt='3'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["12"]}' alt='12'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["4"]}' alt='4'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["0"]}' alt='0'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["11"]}' alt='11'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["5"]}' alt='5'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["10"]}' alt='10'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["6"]}' alt='6'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["9"]}' alt='9'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["7"]}' alt='7'/></div>
        <div class='bg-muted card'><img class="max-h-[90%]" src='${images["8"]}' alt='8'/></div>
      </div>
      `;
      for (let x = 0; x < 29; x++) {
        wheel.innerHTML += row;
      }
    }
  };

  const spinWheel = (roll: number = 0) => {
    dispatch({ type: "START_SPIN" });
    const wheel = wheelRef.current;
    if (wheel) {
      const order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
      const position = order.indexOf(roll);

      const rows = 12;
      const card = 75 + 3 * 2;
      let landingPosition = rows * 15 * card + position * card;

      const randomize = Math.floor(Math.random() * 75) - 75 / 2;

      landingPosition += randomize;

      const object = {
        x: Math.floor(Math.random() * 50) / 100,
        y: Math.floor(Math.random() * 20) / 100,
      };

      wheel.style.transitionTimingFunction = `cubic-bezier(0, ${object.x}, ${object.y}, 1)`;
      wheel.style.transitionDuration = "6s";
      wheel.style.transform = `translate3d(-${landingPosition}px, 0px, 0px)`;

      setTimeout(() => {
        if (wheel) {
          wheel.style.transitionTimingFunction = "";
          wheel.style.transitionDuration = "";

          const resetTo = -(position * card + randomize);
          wheel.style.transform = `translate3d(${resetTo}px, 0px, 0px)`;
        }
        dispatch({ type: "STOP_SPIN" });
      }, 6 * 1000);
    }
  };

  const handleClick = () => {
    let num = Math.round(Math.random()) ? 3 : 10;
    spinWheel(num);
  };

  return (
    <>
      <div className="roulette-wrapper relative flex justify-center w-full mx-auto overflow-hidden mb-8">
        <div className="w-1 bg-primary absolute left-1/2 h-full -translate-x-1/2 z-10" />
        <div className="wheel flex" ref={wheelRef}></div>
      </div>
      <Button onClick={handleClick} disabled={state.isSpinning}>
        Spin
      </Button>
    </>
  );
};

export default RouletteWheel;
