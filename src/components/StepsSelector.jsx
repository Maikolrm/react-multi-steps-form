import { useContext } from "react"

// context
import AppState from "../context/AppState"

// components
import Container from "./Container"

export default function StepsSelector(props) {
  // app state
  const { currentStep } = useContext(AppState)

  return(
    <Container styles={props.styles}>
      {props.steps.map((step, index) => (
        <button key={index} onClick={() => alert("Select form step")} className={`block w-10 h-10 border border-wihte rounded-full font-bold text-xs text-white leading-10 ${currentStep == index ? "bg-sky-300 border-sky-300 text-purple-500" : ""}`}>
          {index + 1}
        </button>
      ))}
    </Container>
  )
}
