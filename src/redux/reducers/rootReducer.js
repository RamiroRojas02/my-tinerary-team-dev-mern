import cityReducer from "./cityReducer";
import hotelsReducer from "./hotelsReducer";
import showsReducer from './showsReducer'

const rootReducer = {
    hotelsReducer,
    showsReducer,
    city: cityReducer,

}
export default rootReducer

