import cityReducer from "./cityReducer";
import hotelsReducer from "./hotelsReducer";
import showsReducer from './showsReducer'
import userReducer from "./userReducer";
import reactionReducer from "./reactionReducer";

import itineraryReducer from "./itineraryReducer";
const rootReducer = {
    hotelsReducer,
    showsReducer,
    city: cityReducer,
    itineraryReducer,
    userReducer,
    reactionReducer

}
export default rootReducer

