
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const defaultStyle={
    color: "#00008B",
     text: "white"
};

const hoverStyle = {
    color: "#ff1938", 
    text: "black"
}

// let name: string = "Log In";
const Autorisation= () =>  {


    const[color, setColor] = useState(defaultStyle);

    const[text, setText] = useState("Log In") as any;
    


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Autorisation user")
        setText((text == "Log In") ?  "Log Out" : "Log In" )

    }
  
  return (
      <Button variant="#00008B" 
                            className="align-item-center justify-content-center list-unstyled color-white backgraund-color-#00008B"
                            style={{ backgroundColor: `${color.color}`, color: `${color.text}`}}
                            onMouseOver={() => (setColor(hoverStyle)) }
                            onMouseOut={() => (setColor(defaultStyle)) }
                            onClick={handleSubmit}
                >{text}</Button> 
  )
}

export default Autorisation