import React from "react";
import { Button, Card, Table } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { IProject } from "../../models/IProject"
import { decrease, increase } from "../counter/counterSlice";

interface ProjectDetails {
    project: IProject,
    update: (project: IProject) => void;
    remove: (project: IProject) => void;
}

const ProjectDetails: React.FC<ProjectDetails> = ({ project, update, remove }) => {

    const value = useAppSelector(state => state.counterReducer.value);
    const dispatch = useDispatch();

    const handleUpdate = (event: React.MouseEvent) => {

        const title = prompt();
        if (title) {
            if (title !== '') {
                update({ ...project, title } as IProject)
            } else return
        } else {
            return
        }

    }
    const handleDelete = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (window.confirm("Really delete this project?")) {
            remove(project);
            window.location.href = "/";
        } else return
    };


    return (
        <Card
            style={{
                display: "flex",
                width: "minContent",
                height: "auto",
                alignItems: "flex-center",
                justifyContent: "center",
                // background: "blue",
                margin: '2rem',
               
            }}   >

            <Link aria-label="Close"
                className="position-absolute top-0 end-0"
                to="/"
                style={{
                    color: "black",
                    margin: '0.5em ',
                    cursor: "pointer",
                    width: "23px",
                    background: 'white',
                    borderRadius: "5px",

                }} ><i className="bi bi-x-lg" style={{ margin: '0.2em 0.2em 0.5em ', }}></i>
            </Link>
            <Card.Body >
                <div className="container" style={{
                    // display: "row",
                }}>
                    <div className="row">
                        <div className="col-md-8"><Card.Img variant="top" src={project.imageUrl} /></div>
                        <div className="col-md-4"><Card>
                            <div style={{ margin: '4%' }}><h1>{value}</h1>
                                <a className="me-2" onClick={() => dispatch(decrease())}><i className="bi bi-hand-thumbs-down"></i></a>
                                <a className="me-2" onClick={() => dispatch(increase())}><i className="bi bi-hand-thumbs-up"></i></a>
                            </div >
                        </Card></div>
                    </div>
                </div>

                <Card.Title> {project.id}. {project.title}</Card.Title>

                <Card.Text>
                    {project.body}
                </Card.Text>
                <Button variant="primary" className="me-2" onClick={handleUpdate}>Edit</Button>
                <Button variant="primary" onClick={handleDelete} >Delete</Button>

            </Card.Body>
        </Card>
    )
}

export default ProjectDetails
