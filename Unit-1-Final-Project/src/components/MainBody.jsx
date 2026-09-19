import { useState } from "react"
import NavMenu from "./nav-components/NavMenu"
import GalleryBody from "./gallery-components/GalleryBody"

export default function MainBody() {

    // STATE TO KEEP TRACK OF WHICH DROPDOWN MENU ITEM IS SELECTED; BY DEFAULT, ALL
    const [galleryState, setGalleryState] = useState("All");

    
    return(

        <div id="main-body-section">

            {/* PASS DOWN DROPDOWN SELECTION AND FUNCTION TO UPDATE IT AS PROPS */}
            <NavMenu galleryState={galleryState} setGalleryState={setGalleryState}/>
    
            {/* PASS DOWN DROPDOWN SELECTION TO THE GALLERY FOR RE-RENDER */}
            <GalleryBody galleryState={galleryState}/>

        </div>

    )

}