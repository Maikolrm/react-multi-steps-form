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

function App() {
  // initialState
  const initialState = {
    steps: [
      { id: 1, name: "your info" },
      { id: 2, name: "select plan" },
      { id: 3, name: "add-ons" },
      { id: 4, name: "summary" }
    ],
    currentStep: 0,
    formData: {
      personalInformation: {
        heading: "personal info",
        description: "please provide your name, email address and phone number",
        fields: [
          { id: 1, label: "name", name: "name", value: "" },
          { id: 2, label: "email", name: "email", value: "" },
          { id: 3, label: "phone number", name: "phone", value: "" },
        ]
      } // presonalInformation end
    },
    requestCount: 0
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-current-step":
        draft.currentStep = action.value
        break
      case "set-information-field":
        const personalInformation = draft.steps.personalInformation
        personalInformation.fields = personalInformation.fields.map(field => ({ ...field, value: field.id == action.id ? action.value : field.value }))
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
          <Container styles="relative flex flex-col flex-1 p-4 pt-0 lg:p-0">
            <StepsForm />
            <Container styles="flex justify-between mt-auto">
              <Button styles={`text-gray-400 ${state.currentStep ? "" : "invisible"}`} name="go back" action="prev" />
              <Button styles="bg-blue-900 text-white" name="next step" action="next" />
            </Container>
          </Container>
        </Container>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
