import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Layout from "./Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Account from "./pages/Account";
import Place from "./pages/Place";
import PlacesForm from "./pages/PlacesForm";
import Booking from "./pages/BookingPage";
import SinglePlace from "./pages/SinglePlace";
import BookingsPage from "./pages/BookingPage";
import BookingsPages from "./pages/BookingPages";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true; // for cookies
function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/places" element={<Place />} />
            <Route path="/account/places/new" element={<PlacesForm />} />
            <Route path="/account/places/:id" element={<PlacesForm />} />
            <Route path="/place/:id" element={<SinglePlace />} />

            <Route path="/account/bookings" element={<BookingsPages />} />
            <Route path="/account/bookings/:id" element={<BookingsPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
