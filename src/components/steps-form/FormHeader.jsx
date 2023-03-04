// components
import Container from "../Container"

export default function FormHeader(props) {
  return(
    <Container styles="pb-4">
      <h2 className="font-bold text-2xl text-sky-700 capitalize leading-none">
        {props.heading}
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        {props.description}
      </p>
    </Container>
  )
}
