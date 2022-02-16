import React, { useState } from 'react'
import {omit} from 'lodash'

interface Form {
    imageUrl: string,
    title: string,
    body: string,
    // email: string,
    // password: string,
    // username: string,
    // error: string

}

const defaultFormValues: Form = {
    imageUrl: 'test',
    title: 'test',
    body: 'test',
    // email: '',
    // password: '',
    // username: ''
};


const useForm = (callback) => {
    
    //Form values
    const [values, setValues] = useState(defaultFormValues) as any;
    //Errors
    const [errors, setErrors] = useState({}) as any;



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'title':

                if( value.length <= 4 ){
                    // we will set the error state
                    setErrors({
                        ...errors,
                        title:'Username atleast have 5 letters'
                    })
                }else{
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "title");
                    setErrors(newObj);
                    
                }
                break;
        
            case 'imageUrl':
    
                if(
                    !new RegExp( /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g).test(value)
                ){
                    setErrors({
                        ...errors,
                        imageUrl:'Enter a valid url address'
                    })
                }else{

                    let newObj = omit(errors, "imageUrl");
                    setErrors(newObj);
                    
                }
            break;
            
            case 'body':
                if(
                    value.length <= 8 || value.length >= 250
                ){
                    setErrors({
                        ...errors,
                        body:'Enter 8-250 symbols'
                    })
                }else{
                    let newObj = omit(errors, "body");
                    setErrors(newObj);
                }
            break;
            
            default:
                break;
        }
    }

  //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val);
        //Let's set these values in state

        setValues({
            ...values,
            [name]:val,
        })

    }


    const handleSubmit = (event) => {
        if(event) event.preventDefault();

        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();

        }else{
            alert("There is an Error!");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm