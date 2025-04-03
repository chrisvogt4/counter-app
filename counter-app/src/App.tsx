import React,{ useState } from 'react'
import './App.css'
import { GrPowerReset } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

type CounterState = {
  count: number
}

const App: React.FC = () => {
  const [state, setState] = useState<CounterState>({ count: 0 })

  const decrement = () => {
    if(state.count > 0) {
      setState({ count: state.count - 1 })
    }
    if(state.count < 0) {
      return null;
    }
    }

  const increment = () => {
    setState({ count: state.count + 1 })
  }

  const reset = () => {
    setState({ count: 0 })
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='top'>
          <div className='settings'>
            <button className='b4'>
              <IoSettingsOutline />
            </button>
          </div>
        <div className='reset'>
          <button className="b3" onClick={reset}>
            <GrPowerReset />
          </button>
        </div>
        </div>
      <div className='button'>
        <div className='button1'>
          <button className="b1" onClick={decrement}>-</button>
        </div>
    
        <h2 className='h'>{state.count}</h2>
      <div className='button2'>
        <button className="b2" onClick={increment}>+</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default App
