import { useEffect } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./context/AppState"
import AppDispatch from "./context/AppDispatch"

// components
import Container from "./components/Container"
import Button from "./components/Button"
import StepsSelector from "./components/StepsSelector"
import StepsForm from "./components/steps-form/StepsForm"

// data
import { data } from "./data"

function App() {
  // initialState
  const initialState = { ...data }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-current-step":
        draft.currentStep = action.value
        break
      case "set-information-field":
        // const personalInformation = draft.formData[0]
        // personalInformation.fields = personalInformation.fields.map(field => ({ ...field, value: field.id == action.id ? action.value : field.value }))
        break
      case "select-plan":
        draft.plans.options = draft.plans.options.map(prev => ({ ...prev, selected: prev.id == action.id }))
        break
      case "set-plan-modality":
        draft.plans.monthly = action.value
        break
      case "check-addon":
        draft.addons.options = draft.addons.options.map(prev => ({ ...prev, checked: (prev.id == action.id) ? action.checked : prev.checked }))
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <Container styles="flex flex-col w-full max-w-lg h-full m-auto bg-white rounded-xl shadow-md overflow-hidden lg:max-w-[75%] lg:flex-row lg:h-auto lg:p-4 lg:rounded-3xl">
          <Container styles="relative overflow-hidden lg:w-[30%]">
            <img src="/sidebar-mobile.svg" alt="sidebar background" className="sidebar block w-full" />
            <StepsSelector />
          </Container>
          <Container styles="relative flex flex-col flex-1 p-4 pt-0 lg:px-[6vw] lg:py-[2vw] lg:flex">
            <StepsForm />
            <Container styles="flex justify-between mt-auto">
              <Button styles={`text-cool-gray ${state.currentStep ? "" : "invisible"}`} name="go back" action="prev" />
              <Button styles="bg-marine-blue text-light-gray" name="next step" action="next" />
            </Container>
          </Container>
        </Container>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
