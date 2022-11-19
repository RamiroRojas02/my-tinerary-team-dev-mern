

export default function CheckBox(props) {
    let {index, check, onChange} = props
  return (
    <label><input className="checkInput" onChange={onChange} key={index} id={check} type="checkbox"></input>{check}</label>
  )
}
