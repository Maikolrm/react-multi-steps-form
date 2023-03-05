// components
import Container from "../Container"

export default function FormHeader(props) {
  return(
    <Container styles="pb-4">
      <h2 className="font-bold text-2xl text-marine-blue capitalize leading-none">
        {props.heading}
      </h2>
      <p className="mt-2 text-base text-cool-gray first-letter:uppercase">
        {props.description}
      </p>
    </Container>
  )
}
