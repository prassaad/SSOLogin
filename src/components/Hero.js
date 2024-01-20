import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-2">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Professional development</h1>

    <p className="lead">
    An LMS to CoE professional development for your company's quality assurance practices to enhance the QA.
    <a href="#">Register</a>
    </p>
  </div>
);

export default Hero;
