import { useReducer } from "react";
import { useAuthStore } from "@/store/authStore";

import RouletteWheel from "@/components/roulette";
import Header from "@/components/header";

const initialState = {
  isSpinning: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "START_SPIN":
      console.log("START_SPIN");
      return { ...state, isSpinning: true };
    case "STOP_SPIN":
      console.log("STOP_SPIN");
      return { ...state, isSpinning: false };
    default:
      throw new Error();
  }
}

export default function Discover() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user, login, logout, isLoggedIn } = useAuthStore();

  console.log("user", user);


  return (
    <div className="overflow-hidden w-screen h-[100svh]">
      <Header />
      <main className="inline-flex w-full min-h-[100vh] bg-muted/40 text-foreground flex-col items-center justify-center">
        {state.isSpinning && <div> SPINNING </div>}
        <RouletteWheel state={state} dispatch={dispatch} />
      </main>
    </div>
  );
}
