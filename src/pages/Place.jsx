import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Perks from "../components/Perks";
import axios from "axios";
import Image from "../components/Image";
import PhotoUploader from "../components/PhotoUploader";
import NavigationButtons from "../components/NavigationButtons";
const Place = () => {
  const { action } = useParams();

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
    </div>
  );
};

export default Place;
