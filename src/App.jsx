import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counterSlice"




const App = () => {
  let {count} = useSelector((store)=>store.counter)
  let dispatch = useDispatch()
  return (
    <div>
      <h1> My count is {count} </h1>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App
