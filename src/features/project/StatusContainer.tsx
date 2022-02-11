import React, { useState } from 'react';
import { projectAPI } from "../../services/ProjectService";
import ProjectListItem from "./ProjectListItem";
import { css } from '@emotion/react'


const StatusContainer = ({ status, id }: { status: string, id: string }) => {

    // const [limit, setLimit] = useState(10);

    // const initialStyle = {
    //     shadow: ".1em 0 .6em #DCDCDC",
    //     position: 0
    // }

    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(10);

    const [shadow, setShadow] = useState(".1em 0 .6em #DCDCDC");

    // const card = css`
    // max-wight: 600px;
    // backgraund-color: #fdfdfd;
    // .card:hover {
    //     background-position: bottom;
    //   }
    // `

    return (
        <div 
        style={{
            boxShadow: `${shadow}`  //".2em 0 .6em #DCDCDC",
        }}
        onMouseOver={() => (
            setShadow(".5em 0 .8em #1B1B3B") 
        )}
        onMouseOut={() => (
            setShadow(".1em 0 .6em #DCDCDC")
        )}
        >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid p-0 d-initial"
                style={{display: "initial"}}
                >
                    
                    <a className="navbar-brand ms-3" href="#">{status}</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={'#' + id} 
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{
                            marginLeft: "auto",
                            alignItems: "flex-end"
                        }}
                    >
                        <span className={['aria-expanded'] ? ("bi bi-chevron-compact-down") : ("bi bi-chevron-compact-up")} > </span>
                    </button>

                    <div className="collapse navbar-collapse" id={id}>

                        <ul className="navbar-nav  mb-lg-0"
                            style={{ display: "inline-block", paddingBlockStart: "1em", paddingBlockEnd: "1em" }}>
                            <li className="nav-item"
                                style={{ maxHeight: "66vh", overflow: "auto" }}
                            >
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
                </div>
            </nav>
        </div>
    )
}

export default StatusContainer
