import { useContext } from "react"

// context
import AppState from "../../context/AppState"

// components
import Container from "../Container"
import FormHeader from "./FormHeader"

// plan modality
function ModalitySelector(props) {
  return(
    <Container styles="mx-6">
      <input onChange={() => alert("Change plan modality")} type="checkbox" className="hidden" value={props.monthly} />
      <button type="button" className="block w-10 p-[.2rem] bg-marine-blue rounded-full">
        <span className="block w-3 h-3 rounded-full bg-white"></span>
      </button>
    </Container>
  )
}

export default function Plans(props) {
  // app state
  const { plans } = useContext(AppState)

  return(
    <Container styles="">
      <FormHeader heading={plans.heading} description={plans.description} />
      <Container styles="grid gap-6">
        {plans.options.map((plan, index) => (
          <button key={plan.id} type="button" className={`flex p-4 border rounded-lg text-left ${plans.current == index ? "border-sky-500" : "border-gray-300"}`}>
            <Container styles="w-10 h-10 bg-red-200 rounded-full overflow-hidden">
              <img src={`/${plan.icon}`} alt={`icon ${plans.name}`} className="block w-full"/>
            </Container>
            <Container styles="flex-1 pl-4">
              <h3 className={`font-semibold text-base text-sky-700 capitalize leading-none`}>
                {plan.name}
              </h3>
              <p className="my-2 text-sm text-gray-400 leading-none">
                ${plan.price}/mo
              </p>
              <span className={`${plans.monthly ? "block" : "hidden"} text-xs text-sky-600 leading-none`}>
                2 months free
              </span>
            </Container>
          </button>
        ))}
      </Container>
      <Container styles="flex items-center justify-center p-10 pb-8">
        <h4 className={`font-semibold text-sm capitalize leading-none ${plans.monthly ? "text-marine-blue" : "text-cool-gray"}`}>
          monthly
        </h4>
        <ModalitySelector monthly={plans.monthly} />
        <h4 className={`font-semibold text-sm capitalize leading-none ${!plans.monthly ? "text-sky-500" : "text-gray-400"}`}>
          yearly
        </h4>
      </Container>
    </Container>
  )
}
