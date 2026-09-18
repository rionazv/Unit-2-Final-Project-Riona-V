import { use } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function AdminPortalSetsBody() {

    const { allCategories, allSets } = use(DataContext);

    // FALLBACK TO PREVENT THE PAGE FROM COMPLETELY BREAKING ON REFRESH IF EITHER VALUE IS NULL
    if( !allCategories || !allSets ) {
        return( "Data has not yet loaded. Please return via the portal page." );
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
                        <th style={{ width: '70%' }}>SetName</th>
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
            <form action="" className="management-form">

                    <legend>Add a new set to the database</legend>
                    <fieldset>

                        <label htmlFor="newSetName">New Set Name: </label>
                        <input type="text" name="newSetName" required />

                        <br /><br />

                        <label htmlFor="newSetCategory">Category it belongs to: </label>
                        <select name="newSetCategory">

                            {allCategories.map( (category) => (
                                <option value={category.id}>{category.categoryName}</option>
                            ) )}

                        </select>

                        <br /><br />
                        <button type="submit">Add New Set</button>

                    </fieldset>

            </form>

            {/* FORM TO ALLOW THE ADMIN TO DELETE AN IMAGE SET FROM THE DATABASE */}
            <form action="" className="management-form">

                    <legend>Delete a set from the database</legend>
                    <fieldset>

                        <label htmlFor="setToBeDeleted">Set to be deleted: </label>
                        <select name="setToBeDeleted">

                            {allSets.map( (sets) => (
                                <option value={sets.id}>{sets.setName}</option>
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