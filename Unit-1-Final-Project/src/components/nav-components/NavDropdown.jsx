export default function NavDropdown({setGalleryState}) {

    // HANDLE CHANGE IN DROPDOWN
    function handleChange(event) {

        // UPDATE THE STATE OF THE DROPDOWN WITH THE SELECTED ITEM
        const newGalleryState = event.target.value;
        setGalleryState(newGalleryState);

    }

    return (

        // CREATE THE DROPDOWN - FOR NOW, SELECTIONS ARE HARDCODED
        <div id="nav-dropdown">

            <select name="image-category" id="image-category" className="dropdown-filter" onChange={handleChange}>

                <option value="All">All Categories</option>
                <option value="Wallpapers">Wallpapers</option>
                <option value="CGs">CGs</option>
                <option value="Stickers">Stickers</option>
                <option value="No Results Test">No Results Test</option>

            </select>
            
            <select name="image-set" id="image-set" className="dropdown-filter" onChange={handleChange}>

                <option value="All">All Sticker Sets</option>
                <option value="From Finality, the Origin">From Finality, the Origin</option>
                <option value="Soaring Good Fortune">Soaring Good Fortune</option>
                <option value="Dance of Life and Death">Dance of Life and Death</option>
                <option value="No Results Test">No Results Test</option>

            </select>

        </div>

    );
}

