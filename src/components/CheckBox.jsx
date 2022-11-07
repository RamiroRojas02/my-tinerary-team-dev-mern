

export default function CheckBox(props) {
    
    let {index, check, change} = props
  return (
    <label><input className="checkInput" onChange={change} key={index} id={check.toLowerCase().split(" ").join("-")} type="checkbox"></input>{check}</label>
  )
}
