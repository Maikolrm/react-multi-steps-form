import { useContext } from "react"

// context
import AppState from "../../context/AppState"

// components
import Container from "../Container"
import PersonalInformation from "./PersonalInformation"
import Plans from "./Plans"
import Addons from "./Addons"
import Summary from "./Summary"

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
        return <Addons />
      default:
        return <Summary />
    }
  }

  return(
    <form onSubmit={handleSubmit} className="relative -top-12 p-6 rounded-lg bg-white shadow-lg lg:top-0 lg:shadow-none lg:p-0">
      {renderCurrentStep()}
    </form>
  )
}
