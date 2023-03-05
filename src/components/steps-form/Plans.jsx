import { useContext } from "react"

// context
import AppState from "../../context/AppState"
import AppDispatch from "../../context/AppDispatch"

// components
import Container from "../Container"
import FormHeader from "./FormHeader"

// plan modality
function ModalitySelector(props) {
  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return(
    <Container styles="mx-6">
      <button onClick={() => appDispatch({ type: "set-plan-modality", value: !props.monthly })} type="button" className="block w-10 p-[.2rem] bg-marine-blue rounded-full">
        <span className={`relative ${props.monthly ? "" : "left-6"} block w-3 h-3 rounded-full bg-white transition duration-200`} />
      </button>
    </Container>
  )
}

export default function Plans(props) {
  // app state
  const { plans } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return(
    <Container styles="">
      <FormHeader heading={plans.heading} description={plans.description} />
      <Container styles="grid gap-6">
        {plans.options.map(plan => (
          <button onClick={() => appDispatch({ type: "select-plan", id: plan.id })} key={plan.id} type="button" className={`flex p-4 border rounded-lg text-left ${plan.selected ? "border-sky-500" : "border-gray-300"}`}>
            <Container styles="w-10 h-10 bg-red-200 rounded-full overflow-hidden">
              <img src={`/${plan.icon}`} alt={`icon ${plans.name}`} className="block w-full"/>
            </Container>
            <Container styles="flex-1 pl-4">
              <h3 className={`font-semibold text-base text-sky-700 capitalize leading-none`}>
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-none">
                ${plan.price}/mo
              </p>
              <span className={`${plans.monthly ? "hidden" : "block"} mt-2 text-xs text-sky-600 leading-none`}>
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
        <h4 className={`font-semibold text-sm capitalize leading-none ${!plans.monthly ? "text-marine-blue" : "text-cool-gray"}`}>
          yearly
        </h4>
      </Container>
    </Container>
  )
}
