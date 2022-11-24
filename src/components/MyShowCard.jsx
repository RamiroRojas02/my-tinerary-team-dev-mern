import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import showActions from "../redux/actions/showsActions";
import { useNavigate } from "react-router-dom";

export default function MyShowCard(props) {
  let { name, img, id } = props;

  let deleteBtn = useRef();
  let editBtn = useRef();

  let dispatch = useDispatch();

  let navigate = useNavigate();



  const editEvent = () => {
    Swal.fire({
      title: `Update ${name}`,
      text: `${name}`,
      showCancelButton: true,
      confirmButtonText: "Update",
      html:
        '<input placeHolder="Name" id="name" class="swal2-input">' +
        '<input placeHolder="Description" id="description" class="swal2-input">' +
        '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
        '<input type="number" placeHolder="Capacity"id="capacity" class="swal2-input">',
      focusConfirm: false,
    }).then((results) => {
      if (results.isConfirmed) {
        let nameInput = document.getElementById("name");
        let descriptionInput = document.getElementById("description");
        let photoInput = document.getElementById("photo");
        let capacityInput = document.getElementById("capacity");

        let hotelToChange = {
          id: id,
          hotel: {},
        };

        if (nameInput.value !== "") {
          hotelToChange.hotel.name = nameInput.value;
        }
        if (descriptionInput.value !== "") {
          hotelToChange.hotel.description = descriptionInput.value;
        }
        if (photoInput.value !== "") {
          hotelToChange.hotel.photo = [photoInput.value];
        }
        if (capacityInput.value !== "") {
          hotelToChange.hotel.capacityInput = capacityInput.value;
        }

        // dispatch(showActions.editShow(hotelToChange));

        navigate("/MyHotels");
      }
    });
  };
  const deleteEvent = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your show has been deleted.", "success");
        dispatch(showActions.deleteShow(id));
        navigate("/MyShows");
      }
    });
  };

  return (
    <div className="myCard">
      <h3>{name}</h3>
      <img src={img} alt={name}></img>
      <div className="myButtons">
        <button className="editBtn" ref={editBtn} onClick={editEvent}>
          Edit
        </button>
        <button className="deleteBtn" ref={deleteBtn} onClick={deleteEvent}>
          Delete
        </button>
      </div>
    </div>
  );
}