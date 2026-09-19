import { use } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function AdminPortalSetsBody() {

    // GET ALL CATEGORIES AND SETS
    const { allCategories, allSets } = use(DataContext);

    // FALLBACK TO PREVENT THE PAGE FROM COMPLETELY BREAKING ON REFRESH IF EITHER VALUE IS NULL
    if( !allCategories || !allSets ) {
        return( "Data has not yet loaded. Please return via the portal page." );
    }

    // WHAT TO DO WHEN NEW SET FORM IS SUBMITTED
    async function handleAddSet(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // PREPARE THE PAYLOAD.
        const setToAdd = {
            setName: formData.get("newSetName"),
            imageCategoryId: Number(formData.get("newSetCategory"))
        }

        try {

            const response = await fetch("http://localhost:8080/api/image-sets", {
                method: "POST",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(setToAdd)
            });

            if(!response.ok) {
                throw new Error("Failed to add new set to the database.");
            }

        } catch (error) {

            console.error(error);

        } finally {

            event.target.reset();

        }

        // RELOAD THE PAGE SO THE NEW ENTRY SHOWS UP.
        window.location.reload();

    }

    // WHAT TO DO WHEN UPDATE SET FORM IS SUBMITTED
    async function handleUpdateSet(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const setToBeUpdatedId = formData.get("setToBeUpdated");

        // PREPARE THE PAYLOAD.
        const setToUpdate = {
            setName: formData.get("updatedSetName"),
            imageCategoryId: Number(formData.get("updatedSetCategory"))
        }

        try {

            const response = await fetch(`http://localhost:8080/api/image-sets/${setToBeUpdatedId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/JSON" },
                body: JSON.stringify(setToUpdate)
            });

            if(!response.ok) {
                throw new Error("Failed to update the set in the database.");
            }

        } catch (error) {

            console.error(error);

        } finally {

            event.target.reset();

        }

        // RELOAD THE PAGE SO THE UPDATED ENTRY SHOWS UP.
        window.location.reload();

    }

    // WHAT TO DO WHEN DELETE SET FORM IS SUBMITTED
    async function handleDeleteSet(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // NO PAYLOAD NEEDS TO BE PREPARED, THE VALUE OF EACH DROPDOWN IS ALREADY SET TO THE ID OF THE SET, SO THE ID IS DELIVERED.
        const setToBeDeletedId = formData.get("setToBeDeleted");

        try {

            const response = await fetch(`http://localhost:8080/api/image-sets/${setToBeDeletedId}`, {
                method: "DELETE"
            });

            if(!response.ok) {
                throw new Error("Failed to delete set from the database.");
            }

            console.log("Deleted Successfully.");

        } catch (error) {

            console.error(error);

        }

        // RELOAD THE PAGE SO THE DELETED ENTRY IS NO LONGER VISIBLE.
        window.location.reload();

    }

    return(

        <section className="admin-portal-body-section">

        <section className="first-section">

            {/* TABLE TO DISPLAY ALL EXISTING CATEGORIES (GENERALLY UNCHANGING) */}
            <h2>All Categories</h2>

            <table id="all-sets-table">

                <thead>
                    <tr>
                        <th style={{ width: '15%' }}>Category ID</th>
                        <th style={{ width: '85%' }}>Category Name</th>
                    </tr>
                </thead>

                <tbody>

                    {allCategories.map( (category) => (
                        <tr key={category.id}>
                            <td style={{ width: '15%' }}>{category.id}</td>
                            <td style={{ width: '85%' }}>{category.categoryName}</td>
                        </tr>
                    ) )}

                </tbody>

            </table>

            {/* TABLE TO DISPLAY ALL EXISTING IMAGE SETS */}
            <h2>All Image Sets</h2>

            <table id="all-sets-table">

                <thead>
                    <tr>
                        <th style={{ width: '15%' }}>Set ID</th>
                        <th style={{ width: '15%' }}>Category ID</th>
                        <th style={{ width: '70%' }}>Set Name</th>
                    </tr>
                </thead>

                <tbody>

                    {allSets.map( (set) => (
                        <tr key={set.id}>
                            <td style={{ width: '15%' }}>{set.id}</td>
                            <td style={{ width: '15%' }}>{set.categoryId}</td>
                            <td style={{ width: '70%' }}>{set.setName}</td>
                        </tr>
                    ) )}

                </tbody>

            </table>

        </section>

        <section className="second-section">

            {/* FORM TO ALLOW THE ADMIN TO UPLOAD A NEW IMAGE SET TO THE SETS DATABASE */}
            <form onSubmit={handleAddSet} className="management-form">

                    <fieldset>

                        <legend>Add a new set to the database</legend>

                        <label htmlFor="newSetName">New Set Name: </label><br />
                        <input type="text" className="admin-input" name="newSetName" id="newSetName" required />

                        <br /><br />

                        <label htmlFor="newSetCategory">Category it belongs to: </label><br />
                        <select className="admin-dropdown-filter" name="newSetCategory" id="newSetCategory">

                            {allCategories.map( (category) => (
                                <option key={category.id} value={category.id}>{category.categoryName}</option>
                            ) )}

                        </select>

                        <br /><br />
                        <button type="submit">Add New Set</button>

                    </fieldset>

            </form>

            {/* FORM TO ALLOW THE ADMIN TO UPLOAD A NEW IMAGE SET TO THE SETS DATABASE */}
            <form onSubmit={handleUpdateSet} className="management-form">

                    <fieldset>

                        <legend>Update a set in the database</legend>

                        <label htmlFor="setToBeUpdated">Set to be updated: </label><br />
                        <select className="admin-dropdown-filter" name="setToBeUpdated">

                            {allSets.map( (sets) => (
                                <option key={sets.id} value={sets.id}>{sets.setName}</option>
                            ) )}

                        </select>

                        <br /><br />

                        <label htmlFor="updatedSetName">Updated Set Name: </label><br />
                        <input type="text" className="admin-input" name="updatedSetName" id="updatedSetName" required />

                        <br /><br />

                        <label htmlFor="updatedSetCategory">Category it belongs to: </label><br />
                        <select className="admin-dropdown-filter" name="updatedSetCategory" id="updatedSetCategory">

                            {allCategories.map( (category) => (
                                <option key={category.id} value={category.id}>{category.categoryName}</option>
                            ) )}

                        </select>

                        <br /><br />

                        <button type="submit">Update This Set</button>

                    </fieldset>

            </form>


            {/* FORM TO ALLOW THE ADMIN TO DELETE AN IMAGE SET FROM THE DATABASE */}
            <form onSubmit={handleDeleteSet} className="management-form">

                    <fieldset>

                    <legend>Delete a set from the database</legend>

                        <label htmlFor="setToBeDeleted">Set to be deleted: </label><br />
                        <select className="admin-dropdown-filter" name="setToBeDeleted">

                            {allSets.map( (sets) => (
                                <option key={sets.id} value={sets.id}>{sets.setName}</option>
                            ) )}

                        </select>

                        <br /><br />
                        <button type="submit">Delete this set</button>

                    </fieldset>

            </form>
            
        </section>
        
    </section>

    )    

}