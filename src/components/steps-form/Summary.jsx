import { useContext } from "react"

// context
import AppState from "../../context/AppState"

// components
import Container from "../Container"
import FormHeader from "./FormHeader"

// calculate total
function calculateTotal(elements, monthly) {
  /*
   * elements array contains all checked addons and current selected plan
   * monthly makes reference to plans modality
   */
  return elements.reduce((acc, obj) => acc += obj.price, 0) * (!monthly ? 10 : 1)
}

// plan modality
function planModality(monthly) {
  if (monthly) {
    return 'mo'
  } else {
    return 'yr'
  }
}

export default function Summary() {
  // app state
  const { plans, addons } = useContext(AppState)
  
  // selected plan
  const [ selectedPlan ] = plans.options.filter(prev => prev.selected)

  // checked addons
  const checkedAddons = addons.options.filter(prev => prev.checked)

  return(
    <Container styles="">
      <FormHeader heading="finishing up" description="double-check everything look OK before confirming" />
      <Container styles="px-4 bg-light-gray/20 rounded-lg">
        <Container styles="flex items-center">
          <Container styles="flex-1">
            <h3 className="mt-1 font-semibold text-sm text-marine-blue leading-10 first-letter:uppercase">
              {selectedPlan.name}
            </h3>
          </Container>
          <span className="font-semibold text-sm text-marine-blue">
            {`+${selectedPlan.price * (plans.monthly ? 1 : 10)}/${planModality(plans.monthly)}`}
          </span>
        </Container>
        {/* addons */}
        <Container styles="border-t border-light-gray">
          {checkedAddons.map(addon => (
            <p key={addon.id} className="flex text-sm text-cool-gray leading-10">
              <span className="flex-1 first-letter:uppercase">{addon.name}</span>
              <span className="">
                {`+${addon.price * (plans.monthly ? 1 : 10)}/${planModality(plans.monthly)}`}
              </span>
            </p>
          ))}
        </Container>
        {/* addons */}
      </Container>
      <Container styles="flex items-center p-4 pt-8">
        <h4 className="flex-1 text-sm text-cool-gray leading-none first-letter:uppercase">
          total (<span>per month</span>)
        </h4>
        <span className="font-bold text-sm text-purplish-blue leading-none">
          {`+$${calculateTotal(checkedAddons.concat(selectedPlan), plans.monthly)}/${planModality(plans.monthly)}`}
        </span>
      </Container>
    </Container>
  )
}
