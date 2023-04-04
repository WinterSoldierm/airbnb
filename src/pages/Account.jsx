import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Place from "./Place";
import NavigationButtons from "../components/NavigationButtons";
const Account = () => {
  const [redirect, setRedirect] = useState(null);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setUser(null);
    setRedirect("/");
  }

  const { user, ready, setUser } = useContext(UserContext);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/Login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <div className="flex justify-center mt-4 mb-4">
        <span className="">Account for {user?.name}</span>
      </div>
      <NavigationButtons />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button className="primary max-w-sm mt-2" onClick={logout}>
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Place />}
    </div>
  );
};

export default Account;
