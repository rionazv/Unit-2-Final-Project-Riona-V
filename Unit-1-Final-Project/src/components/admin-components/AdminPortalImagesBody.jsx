import { use, useEffect } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function AdminPortalImagesBody() {

    const { allCategories, allSets, allImages, allValkyries } = use(DataContext);
    
    // MAKE SURE ALL DATA IS READY BEFORE DOING ANYTHING ON THE PAGE
    const isDataReady = ( allCategories && allSets && allImages && allValkyries );

    // USEEFFECT TO INCLUDE THE SCRIPT FROM IMGBB
        useEffect( () => {

            // THERE'S A LOT OF PROBLEMS WITH THIS EXTERNAL SCRIPT. IT ENGAGES RACES WITH THE OTHER DATA ON THE PAGE.
            // THEREFORE, IF ALL PAGE DATA ISN'T READY, DON'T ATTEMPT TO LOAD THE SCRIPT.
            // ATTEMPTING TO LOAD IT AT THE SAME TIME AS ANYTHING ELSE CAUSES IT TO FAIL TO LOAD UPON REFRESH.
            if(!isDataReady) return;

            // PREPARE THE SCRIPT. 
            const imgbbScript = document.createElement("script");
            imgbbScript.src = "https://imgbb.com/upload.js";
            imgbbScript.async = true;
            imgbbScript.setAttribute("data-auto-insert", "html-embed-medium");
            imgbbScript.setAttribute("data-palette", "yellow");

            // APPEND THE SCRIPT TO THE PAGE.
            document.body.appendChild(imgbbScript);

        }, [isDataReady])

    // FALLBACK TO PREVENT THE PAGE FROM COMPLETELY BREAKING ON REFRESH IF ANY DATA ISN'T READY.
    if( !isDataReady ) {
        return( "Data has not yet loaded. Please return via the portal page." );
    }

    // WHAT TO DO WHEN NEW SET FORM IS SUBMITTED
    async function handleAddImage(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // GET THE IMAGE TAGS FROM THE CHECKBOXES.
        // IF THE USER DIDN'T PICK ANY TAGS, CHOOSE OTHER BY DEFAULT AND SEND THAT ALONE.
        const imageTagsArray = formData.getAll("imageTags");
        if(imageTagsArray.length === 0) imageTagsArray.push("OTHER");

        // PREPARE THE PAYLOAD.
        const imageToAdd = {
            imageUrl: formData.get("newImageUrl"),
            imageSetId: Number(formData.get("newImageSet")),
            // CONVERT THE ARRAY OF TAGS TO A STRING, BECAUSE THAT'S WHAT THE BACKEND ACCEPTS.
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

        // RELOAD THE PAGE SO THE NEW ENTRY SHOWS UP.
        window.location.reload();

    }


    return(

        <section className="admin-portal-body-section">

        <section className="first-section">

            <h2>All Images</h2>

            {/* POPULATE A TABLE WITH ALL THE IMAGES FROM THE DATABASE. */}
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
                            {/* INSTEAD OF  PUTTING IN FULL LINKS (TAKES UP A LOT OF SPACE), INSERT A HYPERLINK TO THE IMAGE. */}
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

                    <fieldset>

                    <legend>Add a new image to the database</legend>

                        {/* THE IMAGE WILL EMBED ITSELF INTO THE UPLOADER. DRAGGING THE IMAGE INTO THE URL FIELD WILL GRAB THE URL. */}
                        {/* IF IMAGE WAS NOT UPLOADED VIA THE UPLOADER, YOU CAN STILL PASTE THE LINK IN. */}
                        <label htmlFor="newImageUrl">Copy image link here or drag image here: </label><br />
                        <input className="admin-input" type="text" name="newImageUrl" id="newImageUrl" required />

                        <br /><br />

                        <label htmlFor="newImageSet">Set it belongs to: </label><br />
                        <select className="admin-dropdown-filter" name="newImageSet">

                            {allSets.map( (sets) => ( <option key={sets.id} value={sets.id}>{sets.setName}</option> ) ) }

                        </select>

                        <br /><br />

                        Add Tags: 

                        <br /><br />

                        {/* CHOOSING TAGS IS NOT ENFORCED BY ANY SORT OF VALIDATION, BUT IF YOU DON'T CHOOSE ANY, IT WILL BE HANDLED ON SUBMIT. */}
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