import { useState } from 'react'

// components
import Container from "./components/Container"
import Button from "./components/Button"
import StepsSelector from "./components/StepsSelector"

function App() {
  return (
    <Container styles="flex flex-col w-full h-full m-auto bg-white rounded-xl shadow-md overflow-hidden">
      <Container styles="relative overflow-hidden">
        <img src="/sidebar-mobile.svg" alt="sidebar background" className="block w-full" />
        <StepsSelector steps={[1, 2, 3, 4]} styles="absolute left-0 top-6 z-1 w-full flex justify-center gap-2" />
      </Container>
      <Container styles="flex-1">main content</Container>
      <Container styles="p-3">
        <Button name="next step" />
      </Container>
    </Container>
  )
}

export default App
