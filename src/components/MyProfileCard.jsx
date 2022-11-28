import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userActions from "../redux/actions/userActions";
import apiUrl from "../url";
import Swal from "sweetalert2";

export default function MyProfileCard() {
  let { user, myUser, success } = useSelector((store) => store.userReducer);

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
                id: user.id,
                user:{} ,
            };

            if (nameInput.value !== "") {
                userNew.user.name = nameInput.value;
            }
            if (lastNameInput.value !== "") {
                userNew.user.lastName = lastNameInput.value;
            }
            if (photoInput.value !== "") {
                userNew.user.photo = photoInput.value;
            }
            if (ageInput.value !== "") {
                userNew.user.age = ageInput.value;
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
            if (success) {
                Swal.fire({
                    title: 'Modify successfully',
                    icon: "success",
                })
            }
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
      <div className="myProfileImg">
        <img className="profileImg" src={myUser.photo} alt={myUser.name}></img>
      </div>
      <div className="myProfile">
        <h4>Name: {myUser.name} </h4>
        <h5>LastName: {myUser.lastName}</h5>
        <p>Age: {myUser.age}</p>
      </div>
      <button className="editProfile" onClick={edit}>EDIT</button>
    </div>
  );
}
