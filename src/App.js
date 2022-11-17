import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Routing/Navbar";
import Protected from "./Components/Protected";
import About from "./Pages/AboutUsPage";
import Contact from "./Pages/ContactPage";
import SignIn from "./Pages/SignInPage";
import SignOut from "./Pages/SignOutPage";
import TodoInput from "./Pages/TodoPage";

const App = () => {
  console.log("App Componenet");
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected CompProp={TodoInput} />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/profile" element={<Protected CompProp={UserProfile} />} /> */}
        <Route path="/signout" element={<SignOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
