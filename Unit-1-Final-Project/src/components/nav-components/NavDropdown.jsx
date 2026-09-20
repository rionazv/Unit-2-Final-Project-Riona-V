import { use, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContextImport";

export default function NavDropdown( { setGalleryState } ) {

    const { allCategories, allSets, allImages } = use(DataContext);

    // ALLOW FOR THE SETS DROPDOWN TO BE CHANGED WHEN THE CATEOGORY DROPDOWN CHANGES. IF ALLSETS IS READY, CALL IT IN. IF IT'S NOT, IT'LL BE EMPTY.
    const [ imagesetsDropdownState, setImagesetsDropdownState ] = useState(allSets ? allSets : []);

    // WHEN THE PAGE LOADS, SET THE GALLERY STATE TO ALL IMAGES.
    useEffect( () => {
        if(allImages) {setGalleryState(allImages)};
    }, [setGalleryState, allImages] );

    if( !allCategories || !allSets || !allImages ) {
        return( "Data has not yet loaded. Please refresh and try again." );
    }   

    // HANDLE CHANGE IN DROPDOWN
    function handleCategoryChange(event) {

        // UPDATE THE STATE OF THE SETS DROPDOWN WITH THE SELECTED CATEGORY - FIRST GRAB ITS ID
        const selectedCategoryId = event.target.value;

        const setsToReturn = (
            // IS THE SELECTION ALL SETS?
            selectedCategoryId === "All" ? 
            // IF YES, RETURN ALL SETS
            allSets : 
            // IF NO, FILTER THE SETS SUCH THAT THE INTERNAL CATEGORY ID MATCHES THE SELECTED CATEGORY ID
            allSets.filter( (set) => String(set.categoryId) === selectedCategoryId )
        );
        
        setImagesetsDropdownState(setsToReturn);

    }

    function handleSetsChange(event) {

        // UPDATE THE STATE OF THE GALLERY WITH THE SELECTED SET - FIRST GRAB ITS ID
        const selectedSetId = event.target.value;

        const imagesToReturn = (
            // IS THE SELECTION ALL SETS?
            selectedSetId === "All" ? 
            // IF YES, RETURN ALL IMAGES
            allImages : 
            // IF NO, FILTER THE IMAGES SUCH THAT THE INTERNAL CATEGORY ID MATCHES THE SELECTED SET ID
            allImages.filter( (image) => String(image.setId) === selectedSetId )
        );
        
        setGalleryState(imagesToReturn);

    }

    return (

        // CREATE THE DROPDOWNS - MAP CATEGORIES AND SETS
        <div id="nav-dropdown">

            
            <label htmlFor="newSetCategory">Filter by cateory: </label><br />
            <select className="dropdown-filter" name="filterSetCategory" id="filterSetCategory" onChange={handleCategoryChange}>

                <option value="All">All Categories</option>
                {allCategories.map( (category) => ( <option key={category.id} value={category.id}>{category.categoryName}</option> ) ) }

            </select>
            
            <label htmlFor="filterImageSet">Filter by set: </label><br />
            <select className="dropdown-filter" name="filterImageSet" onChange={handleSetsChange}>

                <option value="All">All Sets</option>
                {imagesetsDropdownState.map( (sets) => ( <option key={sets.id} value={sets.id}>{sets.setName}</option> ) ) }

            </select>

        </div>

    );
}

