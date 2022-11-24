import { createReducer } from "@reduxjs/toolkit";
import showsActions from "../actions/showsActions";

const { getShows, deleteShow, editShow, getMyShows } = showsActions;

const initialState = {
  listShows: [],
  loading: false,
  errors: [],
};
const showsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getShows.fulfilled, (state, action) => {
    return {
      ...state,
      loading: false,
      listShows: action.payload.listHotels,
    };
  });
  builder.addCase(getShows.pending, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  });

  builder.addCase(deleteShow.fulfilled, (state, action) => {
    let shows = state.listShows.filter(
      (e) => e._id !== action.payload.eliminate.id
    );
    console.log(shows);
    return {
      ...state,
      loading: false,
      listShows: shows,
    };
  });
  builder.addCase(editShow.fulfilled, (state, action) => {
    // console.log(action.payload);
    // console.log(state);
    if (action.payload.success) {
      let hotels = state.listHotels.filter(
        (e) => e._id !== action.payload.showUpdate._id
      );

      hotels.push(action.payload.hotelUpdate);

      return {
        ...state,
        loading: false,
        listShows: hotels,
      };
    } else {
      return {
        ...state,
        loading: false,
        errors: action.payload.messagge,
      };
    }
  });
  builder.addCase(getMyShows.fulfilled, (state, action) => {
    return {
      ...state,
      loading: false,
      listShows: action.payload.listShows,
    };
  });
});

export default showsReducer;
