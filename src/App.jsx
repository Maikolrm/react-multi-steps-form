import { useState } from 'react'
import { useImmerReducer } from "use-immer"

// context
import AppState from "./context/AppState"
import AppDispatch from "./context/AppDispatch"

// components
import Container from "./components/Container"
import Button from "./components/Button"
import StepsSelector from "./components/StepsSelector"

function App() {
  // initialState
  const initialState = {
    steps: [],
    currentStep: 0,
    requestCount: 0
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "set-current-step":
        draft.currentStep = action.value
        break
    }
  }

  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <AppState.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>
        <Container styles="flex flex-col w-full max-w-lg h-full m-auto bg-white rounded-xl shadow-md overflow-hidden">
          <Container styles="relative overflow-hidden">
            <img src="/sidebar-mobile.svg" alt="sidebar background" className="block w-full" />
            <StepsSelector steps={[1, 2, 3, 4]} styles="absolute left-0 top-6 z-1 w-full flex justify-center gap-2" />
          </Container>
          <Container styles="flex-1">main content</Container>
          <Container styles="flex justify-between p-3">
            <Button styles={`text-gray-400 ${state.currentStep ? "" : "invisible"}`} name="go back" action="prev" />
            <Button styles="bg-blue-900 text-white" name="next step" action="next" />
          </Container>
        </Container>
      </AppDispatch.Provider>
    </AppState.Provider>
  )
}

export default App
