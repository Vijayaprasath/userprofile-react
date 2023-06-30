import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<Header />}></Route>
        <Route path="/userProfile" Component={<UserProfile />}></Route>
        <Route path="/forgetPassword" element={<ForgetPassword />}></Route>
        <Route path="/createAccount" element={<CreateAccount />}></Route>
      </Routes>
    </BrowserRouter>
   
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <h1>Welcome to React</h1>
//     )
//   }
// }

export default App;
