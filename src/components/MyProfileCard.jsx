import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import apiUrl from "../url";
import Swal from "sweetalert2";

export default function MyProfileCard() {
  let { user, myUser } = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();

  const edit = () => {
    Swal.fire({
      title: `Update ${myUser.name}`,
      text: `Profile:${myUser.name}`,
      showCancelButton: true,
      confirmButtonText: "Update",
      html:
        '<input placeHolder="Name" id="name" class="swal2-input">' +
        '<input placeHolder="Last-Name" id="lastName" class="swal2-input">' +
        '<input placeHolder="Photo Url"id="photo" class="swal2-input">' +
        '<input type="number" placeHolder="Age"id="age" class="swal2-input">',
      focusConfirm: false,
    }).then((results) => {
      if (results.isConfirmed) {
        let nameInput = document.getElementById("name");
            let lastNameInput = document.getElementById("lastName");
            let photoInput = document.getElementById("photo");
            let ageInput = document.getElementById("age");

            let userNew = {
                id: user.id
            };

            if (nameInput.value !== "") {
                userNew.name = nameInput.value;
            }
            if (lastNameInput.value !== "") {
                userNew.lastName = lastNameInput.value;
            }
            if (photoInput.value !== "") {
                userNew.photo = photoInput.value;
            }
            if (ageInput.value !== "") {
                userNew.age = ageInput.value;
            }
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Updated!",
        }).then((results) => {
          if (results.isConfirmed) {
            dispatch(userActions.updateMyProfile(userNew));
          }
        });
      }
    });
  };
  useEffect(() => {
    dispatch(userActions.getMyProfile(user.id));
  }, []);

  return (
    <div className="profileCard">
      <section>
        <img src={myUser.photo} alt={myUser.name}></img>
      </section>
      <section>
        <h4>Name: {myUser.name} </h4>
        <h5>LastName: {myUser.lastName}</h5>
        <p>Age: {myUser.age}</p>
      </section>
      <button onClick={edit}>Edit</button>
    </div>
  );
}
