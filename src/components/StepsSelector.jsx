import { useContext } from "react"

// context
import AppState from "../context/AppState"

// components
import Container from "./Container"

export default function StepsSelector(props) {
  // app state
  const { steps, currentStep } = useContext(AppState)

  return(
    <Container styles="absolute top-10 w-full flex gap-2 justify-center lg:flex-col lg:justify-none lg:gap-6">
      {steps.map((step, index) => (
        <Container key={step.id} styles="flex items-center lg:ml-12">
          <button onClick={() => alert("Select form step")} className={`block w-10 h-10 border border-wihte rounded-full font-bold text-xs leading-10 ${currentStep == index ? "bg-light-blue border-light-blue text-marine-blue" : "text-white"}`}>
            {index + 1}
          </button>
          <Container styles="hidden pl-4 uppercase lg:block">
            <p className="text-xs text-gray-300 leading-none">step {index + 1}</p>
            <h3 className="mt-2 font-semibold text-sm text-white leading-none">{step.name}</h3>
          </Container>
        </Container>
      ))}
    </Container>
  )
}
