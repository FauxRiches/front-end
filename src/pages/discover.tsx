import RouletteWheel from "@/components/roulette";
import ThemeSelector from "@/components/theme-selector";
import { useReducer } from "react";


const initialState = {
  isSpinning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'START_SPIN':
      console.log('START_SPIN');
      return { ...state, isSpinning: true };
    case 'STOP_SPIN':
      console.log('STOP_SPIN');
      return { ...state, isSpinning: false };
    default:
      throw new Error();
  }
}

export default function Discover() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="overflow-hidden w-screen h-[100svh]">
      <nav className="absolute inset-x-0 top-0 z-50">
        <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <ThemeSelector />
        </div>
      </nav>
      <main className="inline-flex w-full min-h-[100vh] bg-background text-foreground flex-col items-center justify-center">
      {/* {state.isSpinning && <div> SPINNING </div>} */}
      <RouletteWheel state={state} dispatch={dispatch} />
      </main>
    </div>
  );
}
