import { useSelector } from "react-redux"

export default function FilterHotels(props) {

let {select, searchInput,onChange} = props

let values = useSelector(store => store.hotelsReducer)
console.log(values);

let asc = false
let desc = false


let selectInitalValue = values.select
 if (selectInitalValue === "asc") {
  asc = true
}else if(selectInitalValue === "desc") {
  desc = true

  
}


  return (
    <div className='filters'>
      <form> <div className="selectBar">
        <label> Alphabetical order:
        <select name="" ref={select} onChange={onChange}>
          <option value={""} selected={true}>All</option>{/* {datosHoteles.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="asc" selected={asc}>A to Z</option>{/* {aToz.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="desc" selected={desc}>Z to A</option>{/* {zToa.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
        </select></label></div>
        <div className="searchBar">
        <label >    Search by text: <input type="search" ref={searchInput} onChange={onChange} value={values.search}  /></label>
        </div>
      </form>
    </div>
  )
}
