import { use, useState } from "react"
import { DataContext } from "../context/DataContextImport";
import NavMenu from "./nav-components/NavMenu"
import GalleryBody from "./gallery-components/GalleryBody"

export default function MainBody() {

    // THE INITIAL GALLERY STATE WILL HAVE ALL IMAGES.
    const { allImages } = use(DataContext);

    // STATE TO KEEP TRACK OF WHICH DROPDOWN MENU ITEM IS SELECTED; BY DEFAULT, ALL
    const [ galleryState, setGalleryState ] = useState(allImages);

    
    return(

        <div id="main-body-section">

            {/* PASS DOWN DROPDOWN SELECTION AND FUNCTION TO UPDATE IT AS PROPS */}
            <NavMenu galleryState={galleryState} setGalleryState={setGalleryState}/>
    
            {/* PASS DOWN DROPDOWN SELECTION TO THE GALLERY FOR RE-RENDER */}
            <GalleryBody galleryState={galleryState}/>

        </div>

    )

}