import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../components/Image";
import { Link } from "react-router-dom";
const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([...response.data, ...response.data]);
    });
  }, []);

  return (
    <div className="mt-8 gap-x-4 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
      {places.length > 0 &&
        places.map((place) => (
          <Link to={"/place/" + place._id} className="text-2xl mb-2">
            <div className="flex mx-2 bg-gray-300 rounded-2xl">
              {place?.photos?.[0] && (
                <img
                  src={"http://localhost:4000/uploads/" + place?.photos?.[0]}
                  className="rounded-2xl object-cover aspect-square  "
                  alt=""
                />
              )}
            </div>
            <div className="flex flex-col p-2">
              <h2 className="text-sm truncate leading-4">{place.title}</h2>
              <h2 className="text-base font-semibold text-gray-500 ">
                {place.address}
              </h2>
              <h2 className="text-base font-semibold mt-1">
                &#8377;{place.price}
              </h2>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;
