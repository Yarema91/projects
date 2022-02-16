import React, { useState } from 'react';
import { projectAPI } from "../../services/ProjectService";
import ProjectListItem from "./ProjectListItem";
import { css } from '@emotion/react'


const StatusContainer = ({ status }:{ status: string}) => {

    // const [limit, setLimit] = useState(10);

    // const initialStyle = {
    //     shadow: ".1em 0 .6em #DCDCDC",
    //     position: 0
    // }

    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(10);

    const [shadow, setShadow] = useState(".1em 0 .6em #DCDCDC");

   

    return (
        <div className="col-sm p-0 m-2 rounded"
        style={{
            boxShadow: `${shadow}`  //".2em 0 .6em #DCDCDC",
        }}
        onMouseOver={() => ( setShadow(".5em 0 .8em #1B1B3B")) }
        onMouseOut={() => (setShadow(".1em 0 .6em #DCDCDC")) }
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid p-0  d-initial" style={{display: "initial"}}>
                    
                    <h5 className="card-title  mt-3 ms-3" >{status}</h5>

                    <button className="navbar-toggler m-auto align-items-center"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + status} 
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className={['aria-expanded'] ? ("bi bi-chevron-compact-down") : ("bi bi-chevron-compact-up")} > </span>
                    </button>

                    <div className="collapse navbar-collapse" id={status}>

                        <ul className="navbar-nav  mb-lg-0 d-inline-block padding-block-start-1em padding-block-end-1em ">
                            <li className="nav-item overflow-auto" style={{ maxHeight: "66vh" }} >

                                {isLoading && <h1>Loading...</h1>}
                                {error && <h1>Error download...</h1>}
                                {projects && projects
                                .filter(project => project.status == status)
                                .map(project =>
                                    <ProjectListItem project={project} key={project.id} />
                                )}
                            </li>
                        </ul>

                    </div>
            </nav>
        </div>
    )
}

export default StatusContainer
