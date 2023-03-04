import { useContext } from "react"

// context
import AppState from "../context/AppState"
import AppDispatch from "../context/AppDispatch"

export default function Button(props) {
  // app state
  const { currentStep } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  // handleClick
  function handleClick(action) {
    if (action == "next") {
      appDispatch({ type: "set-current-step", value: currentStep + 1 })
    } else {
      appDispatch({ type: "set-current-step", value: currentStep - 1 })
    }
  }

  return(
    <button
      onClick={() => handleClick(props.action)}
      className={`block w-28 h-12 rounded-md text-sm font-semibold capitalize ${props.styles}`}>
      {props.name}
    </button>
  )
}
