import { useContext } from "react"

// context
import AppState from "../../context/AppState"

// components
import Container from "../Container"
import PersonalInformation from "./PersonalInformation"
import Plans from "./Plans"

export default function StepsForm(props) {
  // app state
  const { currentStep } = useContext(AppState)

  // handleSubmit
  function handleSubmit(e) {
    e.preventDefault()
    alert("send form")
  }

  // renderStepForm
  function renderCurrentStep() {
    switch(currentStep) {
      case 0:
        return <PersonalInformation />
      case 1:
        return <Plans />
      case 2:
        return <h1>text</h1>
      default:
        return <h1>default</h1>
    }
  }

  return(
    <form onSubmit={handleSubmit} className="relative -top-12 p-6 rounded-lg bg-white shadow-lg">
      {renderCurrentStep()}
    </form>
  )
}
