import React, { Component } from "react";
import Header from '../components/Header';
import "../App.css";
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';
import Wizard4 from './Wizard4';
import Wizard5 from './Wizard5';



class WizardPage extends Component {
  render() {
    return <div className="Dashboard">
        <Header />
          <Wizard1 />
          <Wizard2 />
          <Wizard3 />
          <Wizard4 />
          <Wizard5 />
    </div>;
  }
}

export default WizardPage;
