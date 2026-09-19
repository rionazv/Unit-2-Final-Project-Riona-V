import { use, useEffect } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function AdminPortalImagesBody() {

    // USEEFFECT TO INCLUDE THE SCRIPT FROM IMGBB
        useEffect( () => {

            // if(document.querySelector( 'script[src="https://imgbb.com/upload.js"]' )) return;

            const imgbbScript = document.createElement("script");
            imgbbScript.src = "https://imgbb.com/upload.js";
            imgbbScript.async = true;
            imgbbScript.setAttribute("data-auto-insert", "html-embed-medium");
            imgbbScript.setAttribute("data-palette", "yellow");
            // imgbbScript.setAttribute("data-sibling", "image-upload-div");
            document.body.appendChild(imgbbScript);
            console.log("Script loaded!");

        }, [])
        
    const { allCategories, allSets, allImages, allValkyries } = use(DataContext);

    // FALLBACK TO PREVENT THE PAGE FROM COMPLETELY BREAKING ON REFRESH IF ANY DATA IS NULL
    if( !allCategories || !allSets || !allImages || !allValkyries ) {
        return( "Data has not yet loaded. Please return via the portal page." );
    }

    // WHAT TO DO WHEN NEW SET FORM IS SUBMITTED
    async function handleAddImage(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const imageTagsArray = formData.getAll("imageTags");
        const imageToAdd = {
            imageUrl: formData.get("newImageUrl"),
            imageSetId: Number(formData.get("newImageSet")),
            imageTags: imageTagsArray.join(", ")
        }

        try {

            const response = await fetch("http://localhost:8080/api/images", {
                method: "POST",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(imageToAdd)
            });

            if(!response.ok) {
                throw new Error("Failed to add new image to the database.");
            }

        } catch (error) {

            console.error(error);

        } finally {

            event.target.reset();

        }

        window.location.reload();

    }


    return(

        <section className="admin-portal-body-section">

        <section className="first-section">

            <h2>All Images</h2>

            <table id="all-images-table">

                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>Image ID</th>
                        <th style={{ width: '10%' }}>Set ID</th>
                        <th style={{ width: '20%' }}>Image Url</th>
                        <th style={{ width: '70%' }}>Image Tags</th>
                    </tr>
                </thead>

                <tbody>

                    {allImages.map( (image) => (
                        <tr key={image.id}>
                            <td style={{ width: '10%' }}>{image.id}</td>
                            <td style={{ width: '10%' }}>{image.setId}</td>
                            <td style={{ width: '20%' }}><a style={{ textDecoration: 'underline' }} target="_blank" href={image.imageUrl}>Link</a></td>
                            <td style={{ width: '70%' }}>{image.imageTags}</td>
                        </tr>
                    ) )}

                </tbody>

            </table>

        </section>

        <section className="second-section">

            <h2 id="upload-instructions">STEP 1: UPLOAD YOUR IMAGE TO THE HOST (CURRENTLY: IMGBB)</h2>

            {/* THE EXTERNAL SCRIPT FROM IMGBB TO ADD THE UPLOADER WILL GO HERE. */}

            <div id="image-upload-div" contentEditable={true}></div>

            
                <h2>STEP 2: CREATE METADATA</h2>

            {/* FORM TO ALLOW THE ADMIN TO UPLOAD A NEW IMAGE TO THE IMAGES DATABASE */}
            <form  onSubmit={handleAddImage} className="management-form">

                    <legend>Add a new image to the database</legend>
                    <fieldset>

                        <label htmlFor="newImageUrl">Drag image here: </label>
                        <input type="text" name="newImageUrl" id="newImageUrl" />

                        <br /><br />

                        <label htmlFor="newImageSet">Set it belongs to: </label>
                        <select name="newImageSet">

                            {allSets.map( (sets) => ( <option key={sets.id} value={sets.id}>{sets.setName}</option> ) ) }

                        </select>

                        <br /><br />

                        Add Tags: 

                        <br /><br />

                        <section id="tag-section">

                            {allValkyries.map( (valk, index) => (

                                <div key={index} className="valk-tag-div">
                                    <label htmlFor={valk}><input className="valk-tag-checkbox" value={valk} type="checkbox" name="imageTags"/>{valk}</label>
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