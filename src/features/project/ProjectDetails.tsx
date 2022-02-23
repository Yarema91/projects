import React from "react";
import { Button, Card, Image, Table } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { IProject } from "../../models/IProject"
import { decrease, increase } from "../counter/counterSlice";

import ReactPlayer from 'react-player';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "../project/Carousel.css";


interface ProjectDetails {
    project: IProject,
    update: (project: IProject) => void;
    remove: (project: IProject) => void;
}


const imageTest: string[] = [
    "https://source.unsplash.com/1600x900/?project-art",
    "https://source.unsplash.com/1600x900/?project-5",
    "https://www.youtube.com/watch?v=oUFJJNQGwhk",
    "https://www.facebook.com/100003176900560/videos/1150744709094910",
    "https://scontent.flwo3-1.fna.fbcdn.net/v/t31.18172-8/18320871_1430522650351635_32066123138879238_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=3TW3e-T7oL8AX9XZyCS&_nc_ht=scontent.flwo3-1.fna&oh=00_AT822NzNb2auJUxTeEHpYZmFcNTPUYdpyd0Bz2uQjUpUdQ&oe=62368638",
    "https://vimeo.com/28164488",
    "https://source.unsplash.com/1600x900/?art",
    // "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
]


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
                margin: '2rem',
            }}>

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
                <div className="container" >
                    <div className="row col-md-8">
                        <Carousel>
                            { project.imageUrl.map((image, index) => {
                                if (!/^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/i.test(image) 
                                && !/^http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/i.test(image)) {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block vertical-align-middle"
                                                loading="lazy"
                                                src={image}
                                                alt="image slide"
                                            />
                                        </Carousel.Item>
                                    );
                                } else {
                                    return (
                                        <Carousel.Item key={index} className='player-wrapper'>
                                            <ReactPlayer
                                                className="react-player w-100 h-700px vertical-align-middle justify-content-center backgraund-color-yellow"
                                                url={image}
                                                pip={true}
                                                controls={true}
                                                loading="lazy"
                                            // playing={true}
                                            />
                                        </Carousel.Item>
                                    );
                                }
                            })}
                        </Carousel>


                        {/* <Carousel.Caption>
                <h3>{project.title}</h3>
              </Carousel.Caption> */}

                        <div className="col-md-4">
                            <div style={{ margin: '4%' }}><h1>{value}</h1>
                                <a className="me-2" onClick={() => dispatch(decrease())}><i className="bi bi-hand-thumbs-down"></i></a>
                                <a className="me-2" onClick={() => dispatch(increase())}><i className="bi bi-hand-thumbs-up"></i></a>
                            </div >

                        </div>
                    </div>
                </div>

                <Card.Title> {project.id}. {project.title}</Card.Title>
                <Card.Text>
                    {project.body}
                </Card.Text>
                <Button
                    variant="primary" className="me-2"
                    onClick={handleUpdate}
                    disabled={false}
                >Edit</Button>

                <Button
                    variant="primary"
                    onClick={handleDelete}
                    disabled={true}
                >Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectDetails
