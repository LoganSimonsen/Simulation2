import React, { Component } from "react";
import Header from './Header';
import "../App.css";

class Dashboard extends Component {
  render() {
    return <div className="Dashboard">
        <Header />
        <div className="dashpage">
        <div className='flexSidesDashPage'></div>
        <div className='flexMiddleDashPage'>
        </div>
        <div className='flexSidesDashPage'></div>
        </div>
    </div>;
  }
}

export default Dashboard;
