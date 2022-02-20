import React, { useCallback, useEffect, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { IProject } from '../models/IProject';
import { projectAPI } from '../services/ProjectService';
import ModalWindow from './project/ModalWindow';
import SearchBar from './project/SearchBar';

import logoSvg from '../ATSlogo.png';
import FormValidator from '../hooks/costunerValidatorForm';
import { table } from 'console';
import Autorisation from './Autorisation';


const defaultFormValues: IProject = {
    title: '',
    imageUrl: [''],
    body: '',
    id: 0,
    status: '',
    values: {},
};


const Header = () => {

    const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()

    const [projectInput, setProjectInput] = useState(defaultFormValues);

    const { getFormIsValid, getFieldValidation} = FormValidator(projectInput) as any;
    const [isDirty, setIsDirty] = useState<{ [id: string]: boolean }>({ title: false });

    
    const handleCreate1 = async () => {
        const title = projectInput.title.charAt(0).toUpperCase() + projectInput.title.slice(1);
        const body = projectInput.body.charAt(0).toUpperCase() + projectInput.body.slice(1);
        const imageUrl = projectInput.imageUrl;

        if (!getFormIsValid()) {
            (
                <h1>Input empty...</h1>
            )
        } else {
            await createProject({ title, imageUrl: (imageUrl === defaultFormValues.imageUrl ) ?  ["https://source.unsplash.com/1600x900/?project-art"] : imageUrl, body, status: "Draft" } as IProject);
            setProjectInput(defaultFormValues);
        }
    }

    // //new
    // const formLogin = () => {
    //     console.log("Callback function when form is submitted!");
    //     console.log("Form Values ", values);
    //     const {title, body, imageUrl }: Form = values as any;  
    //     createProject({title, body, imageUrl,  status: "Draft"}  as IProject);
    //     setProjectInput(defaultFormValues);
    // }

    // //Custom hook call
    // const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    return (
        <nav className="navbar  navbar-expand-lg navbar-light bg-light pt-0 pb-0 ">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/" role="button" style={{ textDecoration: "none", color: "black" }}>
                    <div className="header__logo">
                        <img width="108" src={logoSvg} alt="ATS logo" />
                    </div>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse w-100 " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-2  m-auto ">
                        <li className="nav-item me-2 md-auto pt-2" >
                            <SearchBar />
                        </li>

                        <li className="m-auto pt-2 l-0 ">

                            {CreateIsLoading && <h1>Loading create project...</h1>}
                            {CreateError && <h1>Error creative...</h1>}

                            <ModalWindow title="Create Project" nameButton="Save" onHandleSubmit={handleCreate1} disabled={!getFormIsValid()}  >

                                <form className="row g-3" action="create-form"  >
                                    <div className="col-md-4 form-outline">
                                        <label htmlFor="validationDefault01" className="form-label">Title</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='name'
                                            value={projectInput.title || ""}
                                            onChange={e => {
                                               
                                                setProjectInput({ ...projectInput, title: e.target.value });
                                                setIsDirty({ ...isDirty, "title": true });
                                            }
                                            }
                                        />
                                    </div>

                                    <div style={{ backgroundColor: "gold" }}>
                                        {isDirty["title"] && getFieldValidation("title").messages}
                                    </div>

                                    <div className="form-group">
                                    <label htmlFor="validationDefault01" className="form-label">Photo or video</label>
                                    <input  type="text" name="url" className='form-control'  placeholder="https://"
                                    value={projectInput.imageUrl ||  ""}
                                     onChange={e => {
                                        setProjectInput({ ...projectInput, imageUrl: [e.target.value]});
                                        setIsDirty({ ...isDirty, "imageUrl": true });
                                    }} 
                                     />
                                     </div>
                                     <div style={{ backgroundColor: "gold" }}>
                                        {isDirty["imageUrl"] && getFieldValidation("imageUrl").messages}
                                    </div>

                                    <div className="form-outline">
                                        <label htmlFor="validationDefault01" className="form-label">Body</label>
                                        <textarea
                                            className='form-control'
                                            placeholder='About project'
                                            id="exampleFormControlTextarea1" 
                                            value={projectInput.body || ""}
                                            onChange={e => {
                                                setProjectInput({ ...projectInput, body: e.target.value });
                                                setIsDirty({ ...isDirty, "body": true });
                                            }}
                                        />
                                    </div>

                                    <div style={{ backgroundColor: "gold" }}>
                                        {isDirty["body"] && getFieldValidation("body").messages}
                                    </div>

                                </form>
                            </ModalWindow>
                        </li>
                    </ul>

                   

                    <li
                    className=" list-unstyled text-decoration-none align-item-center justify-content-center"
                    >
                        
                        <Autorisation />
                           
                    </li>

                </div>
            </div>
        </nav>
    )
}

export default React.memo(Header)
