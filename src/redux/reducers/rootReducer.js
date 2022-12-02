import cityReducer from "./cityReducer";
import hotelsReducer from "./hotelsReducer";
import showsReducer from './showsReducer'
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";

import itineraryReducer from "./itineraryReducer";
const rootReducer = {
    hotelsReducer,
    showsReducer,
    city: cityReducer,
    itineraryReducer,
    userReducer,
    commentReducer


}
export default rootReducer