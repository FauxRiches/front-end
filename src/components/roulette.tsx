import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "./ui/button";

const RouletteWheel = ({ state, dispatch }) => {
  const wheelRef = useRef<HTMLDivElement | null>(null);

  const displayOrder = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4];
  const images = {
    "0": "/images/roulette/pile-of-money.webp",
    "1": "/images/roulette/sport-car.webp",
    "2": "/images/roulette/private-jet.png",
    "3": "/images/logo.webp",
    "4": "/images/roulette/diamond.png",
    "5": "/images/roulette/ipad.png",
    "6": "/images/roulette/rolex.png",
    "7": "/images/roulette/necless.png",
    "8": "/images/roulette/gold-bar.png",
    "9": "/images/roulette/pile-of-money.webp",
    "10": "/images/logo.webp",
    "11": "/images/roulette/rolex.png",
    "12": "/images/roulette/gold-bar.png",
    "13": "/images/roulette/diamond.png",
    "14": "/images/roulette/macbook.png",
  };

  const spinWheel = (roll: number = 0) => {
    dispatch({ type: "START_SPIN" });
    const wheel = wheelRef.current;

    if (wheel) {
      const rows = 12;
      const card = 75 + 3 * 2;
      const initialCard = 8;
      const position = (displayOrder.indexOf(roll) + 1 - initialCard);

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
    // Make the wheel result on 3 or 10 randomly
    spinWheel(Math.random() < 0.5 ? 3 : 10);
  };

  return (
    <>
      <div className="relative flex justify-center w-full mx-auto overflow-hidden mb-8">
        <div className="w-1 bg-primary absolute left-1/2 h-full -translate-x-1/2 z-10" />
        <div className="flex gap-1.5" ref={wheelRef}>
          {Array.from({ length: 29 }).map((_, i) => (
            <div key={i} className="flex gap-1.5">
              {displayOrder.map((item, j) => (
                <div
                  key={i + j}
                  className="relative h-[75px] w-[75px] rounded-lg flex items-center justify-center select-none bg-muted border border-primary shadow-sm shadow-secondary-foreground"
                >
                  <Image
                    src={images[item]}
                    alt={item.toString()}
                    fill={true}
                    sizes="100%"
                    className="p-[5px] object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button onClick={handleClick} disabled={state.isSpinning}>
        Spin
      </Button>
    </>
  );
};

export default RouletteWheel;
