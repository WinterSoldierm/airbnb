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
            <Route path="/account/:subpage?" element={<Account />} />
            <Route path="/account/:subpage/:action" element={<Account />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
