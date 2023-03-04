// components
import Container from "../Container"

export default function FormControl(props) {
  return(
    <Container styles="">
      <label htmlFor={props.name} className="flex w-full pb-2 text-sm capitalize leading-none">
        {props.label} <span className={`ml-auto font-semibold text-red-500 hidden`}>this field is required</span>
      </label>
      <input
        id={props.name}
        className="outline-none block w-full px-4 bg-transparent border border-gray-300 rounded-md leading-[3rem]"
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder="e.g: test"
        onChange={(e) => props.dispatch({ type: "set-information-field", id: props.id, value: e.target.value })}
      />
    </Container>
  )
}
