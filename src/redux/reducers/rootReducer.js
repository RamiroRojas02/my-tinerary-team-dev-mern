import cityReducer from "./cityReducer";
import hotelsReducer from "./hotelsReducer";
import showsReducer from './showsReducer'
import userReducer from "./userReducer";

import itineraryReducer from "./itineraryReducer";
const rootReducer = {
    hotelsReducer,
    showsReducer,
    city: cityReducer,
    itineraryReducer,
    userReducer
}
export default rootReducer