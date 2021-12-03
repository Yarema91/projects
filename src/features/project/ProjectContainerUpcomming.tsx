import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { projectAPI } from "../../services/ProjectService"
import ProjectListItem from "./ProjectListItem"

const ProjectContainer = () => {

    const [limit, setLimit] = useState(15);
    const { data: projects, error, isLoading } = projectAPI.useFetchAllProjectsQuery(limit);
    // const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()
    // const [deleteProject, { }] = projectAPI.useDeleteProjectMutation();
    // const [updateProject, { }] = projectAPI.useUpdateProjectMutation();


    // const handleCreate = async () => {
    //     const title = prompt();
    //     await createProject({ title, body: title } as IProject)

    // }
    // const handleUpdate = (project: IProject) => {
    //     updateProject(project)
    // }
    // const handleRemove = (project: IProject) => {
    //     deleteProject(project)
    // }

    return (
        <div style={{ boxShadow: ".2em 0 .6em #DCDCDC", 
        // minWidth: '16rem', maxWidth: '22rem'  
        }} >
       
            {/* {CreateIsLoading && <h1>Loading create project...</h1>}
            {CreateError && <h1>Error creative...</h1>}
            <button onClick={handleCreate}>Create project</button> */}


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid"
                    style={{ display: "initial",
                    maxHeight: "36.5em", 
                    overflow: "auto" 
                    }}>
                    <a className="navbar-brand" href="#" 
                    //  style={{ color: "#03C5EE" }}
                     >Upcomming</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent-2"
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent-2">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "inline-block", paddingBlockStart: "1em", paddingBlockEnd: "1em"}}>
                            <li  className="nav-item" 
                            // style={{ height: "42em", overflow: "auto" }}
                            >
                               {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error download...</h1>}
                {projects && projects.filter(project => project.status == "active").map(project =>
                    <ProjectListItem project={project} key={project.id} />
                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <Card border="success" 
            style={{ minWidth: '18rem' }}
            >
            <Card.Header style={{ color: "green"}} as="h6" >Upcomming</Card.Header>        
            <div style={{ height: "42em", overflow: "auto" }}>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error download...</h1>}
                {projects && projects.filter(project => project.status == "active").map(project =>
                    <ProjectListItem project={project} key={project.id} />
                )}
            </div>
        </Card> */}
        </div>
    )
}

export default ProjectContainer
