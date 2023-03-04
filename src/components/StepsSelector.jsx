// components
import Container from "./Container"

export default function StepsSelector(props) {
  return(
    <Container styles={props.styles}>
      {props.steps.map((step, index) => (
        <button key={index} className={`block w-10 h-10 border border-wihte rounded-full font-bold text-xs text-white leading-10`}>
          {index + 1}
        </button>
      ))}
    </Container>
  )
}
