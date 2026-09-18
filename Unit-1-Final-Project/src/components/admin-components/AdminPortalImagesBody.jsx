import { use, useEffect } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function AdminPortalImagesBody() {

    // USEEFFECT TO INCLUDE THE SCRIPT FROM IMGBB
        useEffect( () => {

            const imgbbScript = document.createElement("script");
            imgbbScript.src = "https://imgbb.com/upload.js";
            imgbbScript.async = true;
            imgbbScript.setAttribute("data-auto-insert", "html-embed-medium");
            imgbbScript.setAttribute("data-palette", "yellow");
            document.body.appendChild(imgbbScript);


            let existingScript = document.querySelector( 'script[src="https://imgbb.com/upload.js"]' );
            if(existingScript) return;

        }, [])
        
    const { allCategories, allSets, allImages, allValkyries } = use(DataContext);

    // FALLBACK TO PREVENT THE PAGE FROM COMPLETELY BREAKING ON REFRESH IF ANY DATA IS NULL
    if( !allCategories || !allSets || !allImages ) {
        return( "Data has not yet loaded. Please return via the portal page." );
    }

    return(

        <section className="admin-portal-body-section">

        <section className="first-section">

            <h2 id="upload-instructions">STEP 1: UPLOAD YOUR IMAGE TO THE HOST (CURRENTLY: IMGBB)</h2>

            {/* THE EXTERNAL SCRIPT FROM IMGBB TO ADD THE UPLOADER WILL GO HERE. */}

            <div id="image-upload-div" contentEditable={true}></div>

        </section>

        <section className="second-section">
            
                <h2>STEP 2: CREATE METADATA</h2>

            {/* FORM TO ALLOW THE ADMIN TO UPLOAD A NEW IMAGE TO THE IMAGES DATABASE */}
            <form action="" className="management-form">

                    <legend>Add a new image to the database</legend>
                    <fieldset>

                        <label htmlFor="newImageCategory">Category it belongs to: </label>
                        <select name="newImageCategory">

                            {allCategories.map( (category) => (
                                <option value={category.id}>{category.categoryName}</option>
                            ) )}

                        </select>

                        <br /><br />

                        <label htmlFor="newImageSet">Set it belongs to: </label>
                        <select name="newImageSet">

                            {allSets.map( (sets) => (
                                <option value={sets.id}>{sets.setName}</option>
                            ) )}

                        </select>

                        <br /><br />

                        Add Tags: 

                        <br /><br />

                        <section id="tag-section">

                            {allValkyries.map( (valk) => (

                                <div className="valk-tag-div">
                                    <label htmlFor={valk}><input className="valk-tag-checkbox" type="checkbox" name={valk}/>{valk}</label>
                                </div>                            

                            ) )}

                        </section>

                        <br /><br />

                        <button type="submit">Add New Image</button>

                    </fieldset>

            </form>
            
        </section>
        
    </section>

    )    

}