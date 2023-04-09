import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NavigationButtons from "../components/NavigationButtons";
import PlaceImg from "../components/PlaceImg";
const Place = () => {
  const { action } = useParams();
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <NavigationButtons />

      <div className="text-center">
        <Link
          className="inline-flex gap-2 bg-primary text-white  py-2 px-2 rounded-full mt-4 mb-4"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new places
        </Link>
      </div>

      <div className="">
        {places?.length > 0 &&
          places?.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 mt-2 rounded-2xl "
              key={place._id}
            >
              <div className="flex w-32 h-32 bg-gray-300 grow shrink-0 rounded-2xl">
                {place.photos.length > 0 && <PlaceImg place={place} />}
              </div>

              <div className="grow-0 shrink">
                <h2 className="text-xl "> {place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Place;
