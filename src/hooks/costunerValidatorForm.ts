import React, { useState } from 'react';
import { IProject } from '../models/IProject';


type FieldName = "title" | "body" | "imageUrl" | "email" | "password" | "username";

const FormValidator = (projectInput) => {

    const validationState: { [id: string]: { isInvalid: boolean, message: string }[] } = {
        "title": [
            { isInvalid: projectInput.title === "", message: "Title can not be empty" },
            { isInvalid: (projectInput.title !== "") && projectInput.title?.length < 4, message: "Title is too short" },
        ],

        "body": [
            { isInvalid: projectInput.body === "", message: "Body can not be empty" },
            { isInvalid: (projectInput.body !== "") && projectInput.body?.length < 10, message: "Body is too short" },
        ],
        "imageUrl": [
            { isInvalid: projectInput.imageUrl === "", message: "If not enter image generated automatecly" },
            { isInvalid: (projectInput.imageUrl !== "") && (!new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(projectInput.imageUrl)), 
                message: "Enter true url image or video" },
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

    // const handleCreate1 = async () => {
    //     const title = projectInput.title;
    //     const body = projectInput.body;
    //     const imageUrl = projectInput.imageUrl;
    //     console.log('create');

    //     if (!getFormIsValid()) {
    //         // (
    //         //     <h1>Input empty...</h1>
    //         // )
    //     } else {
    //         await createProject({ title, imageUrl:  imageUrl ?? "https://source.unsplash.com/1600x900/?project-art", body, status: "Draft"
    //      } as IProject);
    //         setProjectInput(defaultFormValues);
    //     }
    // }

    return {
        getFormIsValid,
        getFieldValidation
    }
}



export default  FormValidator

