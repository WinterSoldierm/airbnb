import React from "react";
import { Link, useParams } from "react-router-dom";

const Place = () => {
  const { action } = useParams();
  //   console.log(action);
  return (
    <div>
      {action !== "new" && (
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
      )}

      <div className="text-center mt-6">My Place</div>

      {action === "new" && (
        <div className="">
          <form>
            <h2 className="text-xl mt-4">Title</h2>
            <p className="text-gray-300 text-sm">
              Title for your place should be short and catchy
            </p>
            <input
              type="text"
              placeholder="title, for example: My lovely apartment"
            />
            <h2 className="text-xl mt-4">Address</h2>
            <p className="text-gray-300 text-sm">Address for your place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-xl mt-4">Photos</h2>
            <p className="text-gray-300 text-sm">more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using link [eg: .jpg]"} />
              <button className="bg-primary px-2 rounded-2xl text-white">
                Add&nbsp;Photo
              </button>
            </div>
            <input type="text" placeholder="photos" />
            <div className="mt-6 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 ">
              <button className="flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-300 text-sm">
              Description about your place
            </p>
            <textarea type="text" placeholder="Decription" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Place;
