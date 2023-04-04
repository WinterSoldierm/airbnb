import React, { useState } from "react";
import PhotoUploader from "../components/PhotoUploader";
import axios from "axios";
import Perks from "../components/Perks";
import NavigationButtons from "../components/NavigationButtons";
import { Navigate } from "react-router-dom";
const PlacesForm = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [desc, setDesc] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);
  const [redirect, setRedirect] = useState(false);

  async function addNewPlace(ev) {
    ev.preventDefault();

    await axios.post("/places", {
      title,
      address,
      addedPhotos,
      desc,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuest,
    });
    setRedirect(true);
  }

  if (redirect) return <Navigate to={"/account/places"} />;

  return (
    <div>
      <NavigationButtons />
      <div className="text-center mt-6">My Place</div>
      <div className="">
        <form onSubmit={addNewPlace}>
          <h2 className="text-xl mt-4">Title</h2>
          <p className="text-gray-300 text-sm">
            Title for your place should be short and catchy
          </p>
          <input
            type="text"
            placeholder="title, for example: My lovely apartment"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2 className="text-xl mt-4">Address</h2>
          <p className="text-gray-300 text-sm">Address for your place</p>
          <input
            type="text"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

          <h2 className="text-2xl mt-4">Description</h2>
          <p className="text-gray-300 text-sm">Description about your place</p>
          <textarea
            type="text"
            placeholder="Decription"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <h2 className="text-2xl mt-4">Perks</h2>
          <p className="text-gray-300 text-sm">
            Select all the perks of your place
          </p>

          <Perks selected={perks} onChange={setPerks} />

          <h2 className="text-2xl mt-4">Extra Information</h2>
          <p className="text-gray-300 text-sm">House rules, etc..</p>
          <textarea
            type="text"
            placeholder="Extra Information"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          <h2 className="text-2xl mt-4">
            Check in & Check out time, max guest{" "}
          </h2>
          <p className="text-gray-300 text-sm">
            Add check in & check out time, remember to have some time window for
            cleaning the roome between guest{" "}
          </p>
          <div className="grid sm:grid-cols-3 gap-2">
            <div className="">
              <h3 className="mt-2 -mb-1">Check in time</h3>
              <input
                type="text"
                placeholder="check in time"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="">
              <h3 className="mt-2 -mb-1">Check out time</h3>
              <input
                type="text"
                placeholder="check out time"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="">
              <h3 className="mt-2 -mb-1">Max guest</h3>
              <input
                type="number"
                placeholder="max guest"
                value={maxGuest}
                onChange={(e) => setMaxGuest(e.target.value)}
              />
            </div>
          </div>
          <button className="primary p-4 my-4">Save</button>
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
