import React, { useState } from "react";
import StatusContainer from "./project/StatusContainer";



const HomePage = () => {

  return (
    <div>

      <div className="container-fluid " >
        <h2 className="w-100 hover-shadow text-center d-row box-sizing-border-box mt-5 mb-5 "
        >Stages of financing</h2>
      </div>

      <div className="container align-items-flex-center padding-block-end-3.2em">
        <div className="row mw-none" data-toggle="dropdown">
          <div className="col-sm">
            <StatusContainer status="Draft" id='Draft' />
          </div>
          <div className="col-sm">
            <StatusContainer status="Upcomming" id="Upcomming" />
          </div>
          <div className="col-sm">
            <StatusContainer status="Active" id="Active" />
          </div>
          <div className="col-sm">
            <StatusContainer status="Finish" id="Finish" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
