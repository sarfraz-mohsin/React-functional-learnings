import './App.css';
import React, {useReducer} from 'react'
//import ReducerCounterThree from './components/ReduceCounterThree';
//import ReducerCounterTwo from './components/ReduceCounterTwo';
//import DataFetching from './components/DataFetching';
//import ReducerCounter from './components/ReducerCounter';
//import IntervalHookCounter from './components/IntervalHookCounter';
//import HookMouse from './components/HookMouse';
//import MouseContainer from './components/MouseContainer';
// import FunctionCounterFour from './components/FunctionCounterFour';
//import HookCounterOne from './components/HookCounterOne';
//import FunctionCounterThree from './components/FunctionCounterThree';
// import FunctionCounterTwo from './components/FunctionCounterTwo';
//import FunctionCounter from './components/FunctionCounter';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
        return state + 1
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState
  
    default:
      return state
  }
} 

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)


  return (

  <CountContext.Provider value={{countstate: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <FunctionCounter/> */}

      {/* <FunctionCounterTwo/> */}

      {/* <FunctionCounterThree/> */}

      {/* <FunctionCounterFour/> */}

      {/* <HookCounterOne/> */}

      {/* <HookMouse/> */}

      {/* <MouseContainer/> */}

      {/* <IntervalHookCounter/> */}

      {/* <DataFetching/> */}

      {/* <ReducerCounter/> */}

      {/* <ReducerCounterTwo/> */}

      {/* <ReducerCounterThree/> */}

      Count - {count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
    </div>
  </CountContext.Provider>
  );
}

export default App;
