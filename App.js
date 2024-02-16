import React, { useReducer } from "react";
import "./App.css";
// import FocusInput from "./UseRef/FocusInput";
// import ClassTimer from "./UseRef/ClassTimer";
import HookTimer from "./UseRef/HookTimer";
import ArrayDemo from "./UseReducer/ArrayDemo";
import Counter from "./CustomHook/Counter";
import UserForm from "./CustomHook/UserForm";
// import IntervalFunCounter from "./Hooks/IntervalFunCounter";
// import IntervalwithClassCounter from "./Hooks/IntervalwithClassCounter";
// import MouseEffectsClass from "./Hooks/MouseEffectsClass";
// import MouseEffectsFun from "./Hooks/MouseEffectsFun";
// import UseEffectCleanup from "./Hooks/UseEffectCleanup";
// import ComponentC from "./UseContext/ComponentC";
// import { ChannelContext, UserContext } from "./UseContext/UserContext";
// import Demo from "./UseReducer/Demo";
// import ObjectDemo from "./UseReducer/ObjectDemo";
// import MultipleReducers from "./UseReducer/MultipleReducers";
// import ComA from "./ReducerandContext/ComA";
// import ComB from "./ReducerandContext/ComB";
// import ComC from "./ReducerandContext/ComC";
// import DataFetchingOne from "./FetchData/DataFetchingOne";
// import DataFetchbyReducer from "./FetchData/DataFetchbyReducer";
// import Prac from "./Practice/Prac";
// import ParentComponent from "./UseCallBack/ParentComponent";
// import UseMemo from "./UseMemo/UseMemo";
// import Title from "./UseCallBack/Title";

// import CounterClass from "./UseEffect/CounterClass";
// import CounterFunctional from "./UseEffect/CounterFunctional";
// import ArrayHook from "./UseState/ArrayHook";
// import CounterHook from "./UseState/CounterHook";
// import ObjectHook from "./UseState/ObjectHook";
// import PrevHookCounter from "./UseState/PrevHookCounter";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "Incre":
//       return state + 1;
//     case "Decre":
//       return state - 1;
//     case "Reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// export const UserContext = React.createContext();
function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      {/* {count}
      <UserContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <ComA></ComA>
        <ComB></ComB>
        <ComC></ComC>
      </UserContext.Provider> */}

      {/* <CounterHook></CounterHook> */}
      {/* <PrevHookCounter /> */}
      {/* <ObjectHook /> */}
      {/* <ArrayHook /> */}
      {/* <CounterClass /> */}
      {/* <CounterFunctional /> */}
      {/* <MouseEffectsClass /> */}
      {/* <MouseEffectsFun /> */}
      {/*  <UseEffectCleanup /> */}
      {/* <IntervalwithClassCounter /> */}
      {/* <IntervalFunCounter /> */}

      {/* <UserContext.Provider value={"Dinesh"}>
        <ChannelContext.Provider value={"Komera"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Demo></Demo> */}
      {/* <ObjectDemo></ObjectDemo> */}
      {/* <MultipleReducers /> */}

      {/* <DataFetchingOne></DataFetchingOne>
      <DataFetchbyReducer></DataFetchbyReducer> */}
      {/* <Prac></Prac> */}

      {/* <ParentComponent></ParentComponent> */}
      {/* <UseMemo></UseMemo> */}

      {/* <FocusInput></FocusInput> */}
      {/* <ClassTimer></ClassTimer> */}
      {/* <HookTimer></HookTimer> */}
      {/* <ArrayDemo></ArrayDemo> */}

      <Counter></Counter>
      <UserForm></UserForm>
    </div>
  );
}

export default App;
