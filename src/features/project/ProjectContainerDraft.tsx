import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainerDraft = () => {

    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(10);

    return (
        <div  className="p-0 m-2 rounded"
        style={{ boxShadow: ".2em 0 .6em #DCDCDC",
         }} >
            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <div className="container-fluid"
                    style={{ display: "initial",
                    maxHeight: "36.5em", 
                    overflow: "auto"  }}>
                    <a className="navbar-brand" href="#" 
                    //  style={{ color: "#03C5EE" }}
                     >Draft</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent-1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{
                            marginLeft: "auto",
                            alignItems: "flex-end"
                        }}
                    >
                        <span className={['aria-expanded'] ? ("bi bi-chevron-compact-down") : ("bi bi-chevron-compact-up")}  >
                            {/* { ['aria-expanded'] ? (<i className="bi bi-chevron-compact-down"></i>) : (<i className="bi bi-chevron-compact-up"></i>)}   */}
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-1">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "inline-block", paddingBlockStart: "1em", paddingBlockEnd: "1em"}}>
                            <li  className="nav-item" 
                            // style={{ height: "42em", overflow: "auto" }}
                            >
                                {isLoading && <h1>Loading...</h1>}
                                {error && <h1>Error download...</h1>}
                                {projects && projects.filter(project => project.status == "draft").map(project =>
                                    <ProjectListItem project={project} key={project.id} />
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        
        </div>
    )
}

export default ProjectContainerDraft