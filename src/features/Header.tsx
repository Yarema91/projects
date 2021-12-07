import React, { useCallback, useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { isJSDocVariadicType } from 'typescript';
import { IProject } from '../models/IProject';
import { projectAPI } from '../services/ProjectService';
import ModalWindow from './project/ModalWindow';
import projectSlice from './project/projectSlice';
import SearchBar from './project/SearchBar';

import logoSvg from '../ATSlogo.png';

// interface Header {
//     project: IProject
// }

const defaultFormValues = {
    imageUrl: '',
    title: '',
    body: ''
};

type FieldName = "title" | "body" | "imageUrl";

const Header = () => {

    const [createProject, { error: CreateError, isLoading: CreateIsLoading }] = projectAPI.useCreateProjectMutation()

    // const handleCreate = async () => {
    //     const title = prompt();
    //     if (title === "") {
    //         <h1>Title empty...</h1>
    //     } else await createProject({ title, body: title, status: "active" } as IProject)
    // }

    // Form =>
    const [projectInput, setProjectInput] = useState<{ title: string, body: string, imageUrl: string }>(defaultFormValues);
    const [isDirty, setIsDirty] = useState<{ [id: string]: boolean }>({ title: false });


    const validationState: { [id: string]: { isInvalid: boolean, message: string }[] } = {
        "title": [
            { isInvalid: projectInput.title === "", message: "Title can not be empty" },
            { isInvalid: (projectInput.title !== "") && projectInput.title?.length < 3, message: "Title is too short" },
        ],
        "body": [
            { isInvalid: projectInput.body === "", message: "Body can not be empty" },
        ]
    };

    const getFieldValidation = (fieldName: FieldName) => {
        const result = validationState[fieldName];
        var isInvalid = result.map(x => x.isInvalid).some(x => x);
        var messages = result.filter(x => x.isInvalid).map(x => x.message);
        return {
            isInvalid: isInvalid,
            messages
        }
    };

    const getFormIsValid = () => {
        return !getFieldValidation("title").isInvalid &&
            !getFieldValidation("body").isInvalid;
    };

    const handleCreate1 = async () => {
        const title = projectInput.title;
        const body = projectInput.body;

        if (!getFormIsValid()) {
            (
                <h1>Input empty...</h1>
            )
        } else {
            await createProject({ title, imageUrl: "https://source.unsplash.com/1600x900/?project-art", body, status: "draft" } as IProject);
            setProjectInput(defaultFormValues);
        }
    }

    return (

        


        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light " 
        style={{
        paddingTop: "0",
        paddingBottom: "0em"
        }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" role="button" style={{ textDecoration: "none", color: "black" }}> 
                <div className="header__logo">
                <img width="108" src={logoSvg} alt="ATS logo" />
                </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"
                style={{
                    //  display: "-webkit-inline-box",
                     width: "100%",

                }}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-2 "
                        style={{
                            // paddingBlockStart: ".5em",
                            margin: "auto",
                            // display: "-webkit-inline-box"
                        }}
                    >
                        <li className="  nav-item me-2 md-auto " style={{ paddingBlockStart: ".5em", }}>
                            <SearchBar />
                        </li>

                        <li style={{
                            paddingBlockStart: ".5em",
                            margin: "auto",
                            paddingLeft: "0rem", 
                            // alignItems:  "unset",
                            // width: "auto",
                        }}>
                            {CreateIsLoading && <h1>Loading create project...</h1>}
                            {CreateError && <h1>Error creative...</h1>}
                            <ModalWindow title="Create Project" nameButton="Save" onHandleSubmit={handleCreate1} disabled={!getFormIsValid()} >

                                <form className="row g-3" action="create-form" >
                                    <div className="col-md-4">
                                        <div className="form-outline">
                                            <label htmlFor="validationDefault01" className="form-label">Title</label>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='title'
                                                value={projectInput.title || ""}
                                                onChange={e => {
                                                    setProjectInput({ ...projectInput, title: e.target.value });
                                                    setIsDirty({ ...isDirty, "title": true });
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "gold" }}>
                                        {isDirty["title"] && getFieldValidation("title").messages}
                                    </div>

                                    <div className="">
                                        <div className="form-outline">
                                            <label htmlFor="validationDefault01" className="form-label">Body</label>
                                            <textarea
                                                // type="text"
                                                className='form-control'
                                                placeholder='body'
                                                value={projectInput.body || ""}
                                                onChange={e => {
                                                    setProjectInput({ ...projectInput, body: e.target.value });
                                                    setIsDirty({ ...isDirty, "body": true });
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "gold" }}>
                                        {isDirty["body"] && getFieldValidation("body").messages}
                                    </div>

                                </form>
                            </ModalWindow>
                        </li>
                    </ul >

                    <li  style={{
                                // display: "flex",
                                // justifyContent: "center",
                                // alignItems: "center",
                                // margin: "auto",
                                // backgroundColor: "white",
                                // borderRadius: "5px",
                                // paddingBlockStart: ".5em",
                                textDecoration: "none",
                                listStyle: "none"
                            }}
                        >
                            <ul style={{ listStyle: "none ",
                             display: "flex",
                             justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            paddingLeft: "0rem",    
                        }}>
                                <Button variant="#00008B"
                                style={{ 
                                    color: "white",
                                    backgroundColor: "#00008B"
                                    }}
                                >Log In</Button>
                            </ul>
                        </li>
                </div>
            </div>
        </nav>
    )
}

export default Header
