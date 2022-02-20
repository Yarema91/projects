import React from "react";
import { Button, Card, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProject } from '../../models/IProject';
import { lineClamp } from '@tailwindcss/line-clamp';

interface ProjectListItem {
    project: IProject;
    // update: (project: IProject) => void;
    // remove: (project: IProject) => void;
}


const ProjectListItem: React.FC<ProjectListItem> = ({ project }) => {


    
    return (
        <div>
            <Card  className="card border-0">
                <Card.Body >
                <img className="ml-3" src={project.imageUrl[0]} width='100%' alt="Generic placeholder image" />
                    <Card.Title>{project.id}. {project.title}</Card.Title>
                    <Card.Text >
                        {project.body.replace(/(.{58})..+/, `$1...`)}
                    </Card.Text>
                    <Link to={`/card/${project.id}`} role="button">Read more</Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectListItem
