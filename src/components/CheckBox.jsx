

export default function CheckBox(props) {
    let {value, onChange} = props
  return (
    <label><input className="checkInput" onChange={onChange} value={value} type="checkbox"></input>{value}</label>
  )
}
