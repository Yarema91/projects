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
    //extract frame with Url video

const link = "https://www.youtube.com/watch?v=oUFJJNQGwhk";

console.log('test', link.replace('https://', '') );
// console.log('match', link.match('http(s)?://(www.)?youtube|youtu\.be')[0]);


// console.log(link);

    function getYoutubeThumb(link){
        const newLink:string = link.replace('https://www.youtube.com/watch?v=', '');
        console.log('newLink', newLink);
        
        const thumbnail = `https://img.youtube.com/vi/${newLink}/mqdefault.jpg`;
        // console.log('thumbnail', thumbnail);
        
        return thumbnail;
    }
console.log(getYoutubeThumb(link));



    // let preview;

    // if(!/^(http:\/\/|https:\/\/)(vimeo\.com|youtu\.be|www\.youtube\.com)\/([\w\/]+)([\?].*)?$/i.test(project.imageUrl[0]) ){
    //     let preview = project.imageUrl[0]
  
    // } else {
    //     let preview = "https://i.ytimg.com/vi/w4Z9bhiCX-Y/mqdefault.jpg"
    // }
    
    

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
