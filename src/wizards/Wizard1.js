import React, { Component } from "react";
import "../App.css";

class Wizard1 extends Component {
  render() {
    return <div className="Dashboard">
        <div className="Wizard">
        <div className='flexSidesDashPage'></div>
        <div className='flexMiddleDashPage'>
            <button>Next</button>
        </div>
        <div className='flexSidesDashPage'></div>
        </div>
    </div>;
  }
}

export default Wizard1;
