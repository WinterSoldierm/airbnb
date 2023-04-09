import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "../components/Image";

const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });
  }, []);

  return (
    <div className="mt-8 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
      {places.length > 0 &&
        places.map((place) => (
          <div className="text-2xl">
            <div className="flex mx-2 bg-gray-300 rounded-2xl">
              {place?.photos?.[0] && (
                <img
                  src={"http://localhost:4000/uploads/" + place?.photos?.[0]}
                  className="rounded-2xl object-cover aspect-square  "
                  alt=""
                />
              )}
            </div>
            <h2 className="text-sm">{place.title}</h2>
            <h2 className="text-base font-bold">{place.address}</h2>
          </div>
        ))}
    </div>
  );
};

export default Home;
