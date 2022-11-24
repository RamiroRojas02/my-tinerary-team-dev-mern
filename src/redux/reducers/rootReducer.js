import cityReducer from "./cityReducer";
import hotelsReducer from "./hotelsReducer";
import showsReducer from './showsReducer'

import itineraryReducer from "./itineraryReducer";
const rootReducer = {
    hotelsReducer,
    showsReducer,
    city: cityReducer,
    itineraryReducer,

}
export default rootReducer

