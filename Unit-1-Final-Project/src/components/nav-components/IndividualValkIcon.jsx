import { useState } from "react";

export default function IndividualValkIcon (props) {

    // Keep track of if the valkyrie filter icon is selected or not
    const [isActive, setIsActive] = useState(false);

    return (

        <img 
        className={`chibi-icon ${isActive ? "is-active" : "is-not-active"} `} // If selected, color icon; if not, grayed out
        onClick= { () => setIsActive(!isActive) } // Toggle selected status with click
        src={props.src} 
        alt={props.alt}
        title={props.title}
        />

    );

}