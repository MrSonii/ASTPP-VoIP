"use client";

//component imports
import NavBar from "../../../components/navBar/NavBar";
import Header from "../../../components/header/Header";
import DashBoard from "../../../components/dashboard/DashBorad";

function userDashBoard() {

  return (
    <div className='dash-container'>
      <div className='navBar-cont'>
        <NavBar />
      </div>
      <div className='dash-body'>
        <Header />
        <DashBoard />
      </div>
    </div>
  )
}

export default userDashBoard;