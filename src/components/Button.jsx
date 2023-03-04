export default function Button(props) {
  return(
    <button className="block w-24 h-12 bg-blue-800 rounded-md text-white capitalize">
      {props.name}
    </button>
  )
}
