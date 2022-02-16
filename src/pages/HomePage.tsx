import React, { useState } from "react";
import StatusContainer from "../features/project/StatusContainer";



const HomePage = () => {

  return (
    <div>
      <div className="container-fluid " >
        <h2 className="w-100 hover-shadow text-center d-row box-sizing-border-box mt-5 mb-5 "
        >Stages of financing</h2>
      </div>

      <div className="container align-items-flex-center m-auto padding-block-end-3.2em row mw-none" data-toggle="dropdown">
            <StatusContainer status="Draft" />
            <StatusContainer status="Upcomming" />
            <StatusContainer status="Active" />
            <StatusContainer status="Finish" />
      </div>
     

    </div>
  );
};

export default HomePage;
