import React from "react";

import logo from "../assets/logo.svg";
import { Row } from "reactstrap";

const Hero = () => (
  
   <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">

        <div class="card bg-success text-white text-center mb-4">
          <div class="card-body">
            <h5 class="card-title">SOP Documents</h5>
            <p>
              <span>Document Control Roles</span>
              <table class="table">
                <thead></thead>
                <tr>
                  <td>Preparer</td>
                  <td>Reviewer</td>
                  <td>Approver</td>
                </tr>
              </table>
            </p>
          </div>
        </div>

       </div>

      <div class="col-lg-4 mb-4 mb-lg-0">

        <div class="card bg-primary text-white mb-4 text-end">
          <div class="card-body">
          <h5 class="card-title">GMP Trainings </h5>
            <p>This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</p>
          </div>
        </div>

       </div>

      <div class="col-lg-4 mb-4 mb-lg-0">

        <div class="card bg-warning text-white text-center mb-4">
          <div class="card-body">
          <h5 class="card-title">Quality Control</h5>
            <p>This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.</p>
          </div>
        </div>

          </div>
    </div> 
);

export default Hero;
