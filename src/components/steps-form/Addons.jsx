import { useContext } from "react"

// context
import AppState from "../../context/AppState"
import AppDispatch from "../../context/AppDispatch"

// components
import Container from "../Container"
import FormHeader from "./FormHeader"

export default function Addons(props) {
  // app state
  const { plans, addons } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return(
    <Container styles="">
      <FormHeader heading={addons.heading} description={addons.description} />
      <Container styles="grid gap-6">
        {addons.options.map(addon => (
          <button onClick={() => appDispatch({ type: "check-addon", id: addon.id, checked: !addon.checked })} key={addon.id} type="button" className={`flex items-center p-6 border ${addon.checked ? "border-marine-blue" : "border-light-gray"} rounded-lg`}>
            <span className={`block w-7 h-7 border ${addon.checked ? "bg-marine-blue border-marine-blue" : "border-light-gray"} rounded text-center leading-7`}>
            </span>
            <Container styles="flex-1 pl-6 text-left">
              <h3 className="font-semibold text-base text-marine-blue leading-none first-letter:uppercase">
                {addon.name}
              </h3>
              <p className="mt-2 text-sm leading-none text-cool-gray first-letter:uppercase">
                {addon.description}
              </p>
            </Container>
            <span className="text-xs text-marine-blue leading-none tracking-wide">
              {`+$${plans.monthly ? addon.price : (10 * addon.price)}/${plans.monthly ? "mo" : "yr"}`}
            </span>
          </button>
        ))}
      </Container>
    </Container>
  )
}
