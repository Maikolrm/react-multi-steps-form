import { useContext } from "react"

// context
import AppState from "../../context/AppState"
import AppDispatch from "../../context/AppDispatch"

// components
import Container from "../Container"
import FormHeader from "./FormHeader"
import FormControl from "./FormControl"

export default function PersonalInformation(props) {
  // app state
  const { formData } = useContext(AppState)

  // app dispatch
  const appDispatch = useContext(AppDispatch)

  return(
    <Container styles="">
      <FormHeader heading={formData.heading} description={formData.description} />
      <Container styles="grid gap-4">
        {formData.fields.map(field => <FormControl key={field.id} id={field.id} label={field.label} name={field.name} value={field.value} dispatch={appDispatch} />)}
      </Container>
    </Container>
  )
}
